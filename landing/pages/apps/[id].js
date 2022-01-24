import DetailApp from "containers/app/detail";
import withAuth from "components/withAuth";

export default withAuth(DetailApp);

export const getServerSideProps = async ({ query }) => {
  try {
    const { id } = query;

    return { props: { id } };
  } catch (error) {
    console.log(error);
    return { props: { id: "" } };
  }
};
