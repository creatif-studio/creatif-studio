import { API } from "utils/api";
import { useQuery, useMutation } from "react-query";

const useSysUser = () => {
  const getSysUsers = () =>
    useQuery("users", async () => {
      const { data } = await API.get("/users");
      return data.data;
    });

  const getSysUserByID = (id) =>
    useQuery("users", async () => {
      const { data } = await API.get("/users/" + id);
      return data.data;
    });

  const createSysUser = useMutation((body) => API.post("/users", body));

  const deleteSysUser = useMutation((id) => API.delete("/users/", id));

  return {
    getSysUsers,
    getSysUserByID,
    createSysUser,
    deleteSysUser,
  };
};

export default useSysUser;
