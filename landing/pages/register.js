import Register from "containers/auth/register";
import getCookie from "utils/getCookie";
import { API, setToken } from "utils/api";

export default Register;

export const getServerSideProps = async (context) => {
  try {
    const token = getCookie(context.req, "token");

    setToken(token);
    const {
      data: { data: user },
    } = await API.get("/profile");

    if (!user.verified)
      return {
        redirect: {
          destination: "/verify",
          permanent: false,
        },
        props: {
          user,
        },
      };

    return {
      redirect: {
        destination: "/servers",
        permanent: false,
      },
      props: {
        user,
      },
    };
  } catch (error) {
    // console.error(error.message);
    return { props: { user: null } };
  }
};
