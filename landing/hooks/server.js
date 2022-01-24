import { API } from "utils/api";
import { useQuery, useMutation } from "react-query";

const useServer = () => {
  const getServers = () =>
    useQuery("servers", async () => {
      const { data } = await API.get("/servers");
      return data.data;
    });

  const getServerByID = (serverId) =>
    useQuery(["server", serverId], async () => {
      const { data } = await API.get("/servers/" + serverId);
      return data.data;
    });

  const getAppsByServer = (serverId) =>
    useQuery(["serverApps", serverId], async () => {
      const { data } = await API.get("/servers/" + serverId + "/apps");
      return data.data;
    });

  const getSysUsersByServer = (serverId) =>
    useQuery(
      ["serverUsers", serverId],
      async () => {
        const { data } = await API.get("/servers/" + serverId + "/users");
        return data.data;
      },
      { enabled: !!serverId }
    );

  const connectServer = useMutation((body) => API.post("/servers", body));

  const statusServer = useMutation((body) => API.post("/servers/status", body));

  const editServer = useMutation(({ id, body }) =>
    API.patch("/servers/" + id, body)
  );

  const deleteServer = useMutation((id) => API.delete("/servers/" + id));

  return {
    getServers,
    getServerByID,
    getAppsByServer,
    getSysUsersByServer,
    connectServer,
    statusServer,
    editServer,
    deleteServer,
  };
};

export default useServer;
