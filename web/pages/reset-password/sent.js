import VerifyEmail from "containers/auth/verify";
import getCookie from "utils/getCookie";
import { API, setToken } from "utils/api";
import redirect from "utils/redirect";

VerifyEmail.getInitialProps = async (context) => {
  try {
    const email = getCookie(context.req, "email");

    if (!email) redirect(context, "/login");

    return { email, from: "forgot", to: "to continue resetting your password" };
  } catch (error) {
    redirect(context, "/login");
  }
};

export default VerifyEmail;
