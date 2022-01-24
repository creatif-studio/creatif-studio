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

export default function EmptyApp() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Container className={classes.center}>
      <img src="/empty.svg" className={classes.empty} />
      <Typography align="center" variant="h4" gutterBottom>
        Create your first app
      </Typography>
      <Typography align="center">
        Create or install apps to your server and manage it easily
      </Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.btn}
        onClick={() => router.push("/apps/create")}
      >
        Create App
      </Button>
    </Container>
  );
}
