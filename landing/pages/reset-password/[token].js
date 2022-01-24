import ResetPassword from "containers/auth/reset";
import { verifyForgot } from "hooks/auth";

export default ResetPassword;

export const getServerSideProps = async ({ query }) => {
  try {
    const { token } = query;
    await verifyForgot({ token });

    return {
      props: { verified: true, token },
    };

    // return { props: { verified: true } };
  } catch (error) {
    console.log(error);
    return { props: { verified: false } };
  }
};
