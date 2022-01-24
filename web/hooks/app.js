import { API } from "utils/api";
import { useQuery, useMutation } from "react-query";

const useApp = () => {
  const getApps = () =>
    useQuery("apps", async () => {
      const { data } = await API.get("/apps");
      return data.data;
    });

  const getAppByID = (id, options = {}) =>
    useQuery(
      "app",
      async () => {
        const { data } = await API.get("/apps/" + id);
        return data.data;
      },
      {
        onError: options.onError,
      }
    );

  const getDatabasesByApp = (id) =>
    useQuery("appUsers", async () => {
      const { data } = await API.get("/apps/" + id + "/databases");
      return data.data;
    });

  const createApp = useMutation((body) => API.post("/apps", body));

  const updateApp = useMutation(({ id, body }) =>
    API.patch("/apps/" + id, body)
  );

  const deleteApp = useMutation((id) => API.delete("/apps/" + id));

  return {
    getApps,
    getAppByID,
    getDatabasesByApp,
    createApp,
    updateApp,
    deleteApp,
  };
};

export default useApp;
