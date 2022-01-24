import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
} from "@material-ui/core";

import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  center: {
    justifyItems: "center",
    display: "grid",
  },
  empty: {},
  btn: {
    marginTop: theme.spacing(1),
    fontSize: theme.typography.pxToRem(16),
    paddingInline: theme.spacing(3),
    paddingBlock: theme.spacing(1),
  },
}));

export default function EmptyServer() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Container className={classes.center}>
      <img src="/empty.svg" className={classes.empty} />
      <Typography align="center" variant="h4" gutterBottom>
        Connect your first server
      </Typography>
      <Typography align="center">
        Connect a server at your favorite provider to get best experience
        managing server. We'll install
      </Typography>
      <Typography align="center" paragraph gutterBottom>
        everything you need like LAMP, LEMP, etc.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.btn}
        onClick={() => router.push("/servers/connect")}
      >
        Connect Server
      </Button>
    </Container>
  );
}
