import CreateApp from "containers/app/create";
import withAuth from "components/withAuth";
import getCookie from "utils/getCookie";
import { API, setToken } from "utils/api";

export default withAuth(CreateApp);

export const getServerSideProps = async (context) => {
  try {
    const token = getCookie(context.req, "token");

    setToken(token);
    const {
      data: { data: user },
    } = await API.get("/profile");

    return {
      props: {
        user,
      },
    };
  } catch (error) {
    console.error(error.message);
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
      props: { user: null },
    };
  }
};
