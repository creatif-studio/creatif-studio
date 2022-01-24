import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import { useRouter } from "next/router";

import Navbar from "components/Navbar";

const useStyles = makeStyles((theme) => ({
  offset: {
    paddingBlock: 100,
    // height: "100vh",
  },
  footer: {
    backgroundColor: theme.palette.primary.dark,
    marginTop: 100,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  const router = useRouter();

  const values = ["/servers", "/apps"];
  const index = values.findIndex((v) => v == router.pathname);

  return (
    <Box style={{ minHeight: "100vh", position: "relative" }}>
      <Navbar value={index >= 0 ? index : false} />
      <Container className={classes.offset}>{children}</Container>
      <Footer />
    </Box>
  );
}

function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <Container>
        <Typography variant="subtitle1">CloudBoz</Typography>
      </Container>
    </Box>
  );
}
