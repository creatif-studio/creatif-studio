import { API, setToken } from "utils/api";
import { useMutation } from "react-query";
import Cookies from "js-cookie";

const useAuthentication = () => {
  const login = useMutation((body) => API.post("/login", body));
  const register = useMutation((body) => API.post("/register", body));

  const resendVerification = useMutation((body) => API.post("/resend", body));

  const beginForgot = useMutation((body) => API.post("/forgot-password", body));
  const resetPassword = useMutation((body) =>
    API.post("/forgot-password/reset", body)
  );
  const resendForgot = useMutation((body) =>
    API.post("/forgot-password/resend", body)
  );

  return {
    login,
    register,
    verify,
    logout,
    resendVerification,
    resendForgot,
    beginForgot,
    verifyForgot,
    resetPassword,
  };
};

const verify = (body) => API.post("/verify", body);
const verifyForgot = (body) => API.post("/forgot-password/verify", body);

const logout = () => {
  Cookies.remove("token");
  localStorage.removeItem("token");
  setToken(null);
};

export { useAuthentication, verify, verifyForgot, logout };
