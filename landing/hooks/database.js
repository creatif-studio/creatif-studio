import { API } from "utils/api";
import { useQuery, useMutation } from "react-query";

const useDatabase = () => {
  const getDatabases = () =>
    useQuery("databases", async () => {
      const { data } = await API.get("/databases");
      return data.data;
    });

  const getDatabaseByID = (databaseId) =>
    useQuery(
      ["database", databaseId],
      async () => {
        const { data } = await API.get("/databases/" + databaseId);
        return data.data;
      },
      { enabled: !!databaseId }
    );

  const createDatabase = useMutation((body) => API.post("/databases", body));

  const deleteDatabase = useMutation((id) => API.delete("/databases/" + id));

  return {
    getDatabases,
    getDatabaseByID,
    createDatabase,
    deleteDatabase,
  };
};

export default useDatabase;
