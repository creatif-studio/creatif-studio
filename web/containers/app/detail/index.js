import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
} from "@material-ui/core";

import { useRouter } from "next/router";

import Layout from "components/Layout";
import Tabs from "components/Tabs";
import AppDatabases from "./databases";
import AppSettings from "./settings";

import useServer from "hooks/server";
import useApp from "hooks/app";
import { Loader } from "components/Loader";

export default function DetailApp({ id }) {
  const classes = useStyles();
  const router = useRouter();
  const { getAppByID } = useApp();

  const {
    data: app,
    isLoading: isLoadingServer,
    isError,
    refetch,
  } = getAppByID(id, {
    onError: () => router.replace("/apps"),
  });

  const tabsItem = ["Databases", "Settings"];
  const disableDb = ["docker", "mongodb", "nginx", "apache", "mysql"];

  return (
    <Layout>
      {isLoadingServer ? (
        <Loader />
      ) : isError ? (
        <h1>not found</h1>
      ) : (
        <>
          <Grid container style={{ justifyContent: "space-between" }}>
            <Grid item>
              <Typography variant="h4">{app.name}</Typography>
              <Grid container spacing={5}>
                <Grid item>
                  <Typography variant="body1" paragraph>
                    Server: {app.server.name}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography variant="body1" paragraph>
                    IP: {app.server.ip.replace("\n", "; ")}
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography variant="body1" paragraph>
                    Type: {app.type.includes("wp") ? "wordpress" : app.type}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Tabs
            items={tabsItem}
            disabled={disableDb.includes(app.type) ? [0] : []}
            defaultIndex={0}
          >
            {!disableDb.includes(app.type) && (
              <AppDatabases app={app} dbs={app.databases} refetch={refetch} />
            )}
            <AppSettings app={app} refetch={refetch} />
          </Tabs>
        </>
      )}
    </Layout>
  );
}

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
