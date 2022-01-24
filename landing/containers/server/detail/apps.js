import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useRouter } from "next/router";

import ListApp from "containers/app/list/list";
import useServer from "hooks/server";

export default function ServerUsers({ apps, server }) {
  const classes = useStyles();
  const router = useRouter();
  // const { getAppsByServer } = useServer();

  return (
    <Container disableGutters className={classes.center}>
      <Grid container className={classes.root}>
        <Grid item>
          <Typography variant="h5" paragraph>
            Apps
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              localStorage.setItem("serverId", server.id);
              router.push("/apps/create");
            }}
          >
            Create App
          </Button>
        </Grid>
      </Grid>
      <ListApp apps={apps} />
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "space-between",
    marginBottom: 30,
  },
  center: {
    justifyItems: "center",
  },
  empty: {},
  btn: {
    marginTop: 20,
    marginBottom: 3,
  },
  form: {
    marginBlock: "3px",
  },
}));
