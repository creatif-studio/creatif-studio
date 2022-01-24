import InvalidToken from "containers/auth/invalidToken";
import { verify } from "hooks/auth";

export default InvalidToken;

export const getServerSideProps = async ({ query }) => {
  try {
    const { token } = query;
    await verify({ token });

    return {
      redirect: {
        destination: "/servers",
        permanent: false,
      },
    };

    // return { props: { verified: true } };
  } catch (error) {
    console.log(error);
    return { props: { verified: false } };
  }
};
