import withAuth from "components/withAuth";
import DetailServer from "containers/server/detail";

export default withAuth(DetailServer);

export const getServerSideProps = async ({ query }) => {
  try {
    const { id } = query;

    return { props: { id } };
  } catch (error) {
    console.log(error);
    return { props: { id: "" } };
  }
};
