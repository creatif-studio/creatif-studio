import React from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  makeStyles,
  Paper,
  Grid,
} from "@material-ui/core";

import Layout from "components/Layout";
import Item from "./components/item";
import Form from "./components/Form";

import useServer from "hooks/server";
import useApp from "hooks/app";
import useSysUser from "hooks/systemUser";
import { useRouter } from "next/router";
import Select from "components/Select";
import Progress from "components/Progress";
import useNotif from "hooks/notif";

export default function CreateApp({ user }) {
  const classes = useStyles();
  const router = useRouter();
  const notif = useNotif();
  const { getServers, editServer: edit } = useServer();
  const { createApp: create } = useApp();
  const [server, setServer] = React.useState({});
  const [app, setApp] = React.useState({
    name: "",
    icon: "",
    type: "",
    stack: "",
    port: null,
  });

  const [loading, setLoading] = React.useState(false);
  const [res, setRes] = React.useState({});

  const { data: servers, isLoading, refetch } = getServers();

  React.useEffect(async () => {
    if (servers) {
      const id = localStorage.getItem("serverId") || undefined;
      let i = 0;
      if (id) {
        i = servers?.findIndex((s) => s.id == id);
      }
      setServer(servers[i]);
      localStorage.removeItem("serverId");
    }
  }, [servers]);

  const handleSubmit = async (values) => {
    try {
      const body = {
        ...values,
        server,
      };
      const { data } = await create.mutateAsync(body);
      await setRes({ id: data.data.id, type: data.data.type });
      setLoading(true);
    } catch (error) {
      notif.error(error.response?.data?.message);
    }
  };

  const handleChangeWebServer = async (value) => {
    try {
      await edit.mutateAsync({ id: server.id, body: { webServer: value } });
      refetch();
    } catch (error) {
      console.log(error.response);
    }
  };

  const validate = (app, server = {}) => {
    if (server[app.name.toLowerCase()]) return true;
    if (
      (app.name == "Apache" || app.name == "LAMP") &&
      server.webServer == "nginx"
    )
      return true;
    else if (
      (app.name == "Nginx" || app.name == "LEMP") &&
      server.webServer == "apache"
    )
      return true;
    else if (server.webServer == "" && app.name == "WordPress") return true;
    return false;
  };

  return (
    <Layout>
      <Typography variant="h4" paragraph>
        Create App
      </Typography>

      {loading ? (
        <Progress
          steps={steps[res.type]}
          path="apps"
          id={res.id}
          message={{ success: "App created", error: "Failed to create app." }}
        />
      ) : (
        <Box>
          <Paper variant="outlined" style={{ padding: 30, marginBottom: 10 }}>
            <Box style={{ marginBottom: 20 }}>
              <Grid container spacing={2}>
                <Grid item sm={6}>
                  <Select
                    name="server"
                    label="Server"
                    placeholder="Choose server..."
                    value={server}
                    handleChange={(e) => setServer(e.target.value)}
                    options={servers || []}
                    renderOption="name"
                  />
                </Grid>
              </Grid>
            </Box>

            {/* <Paper variant="outlined" style={{ padding: 30 }}> */}
            <Box className={classes.root}>
              {listApp.map((item, i) => (
                <Item
                  name={item.name}
                  icon={item.icon}
                  key={i}
                  onClick={() => setApp(item)}
                  active={item.name == app.name}
                  disabled={validate(item, server)}
                />
              ))}
            </Box>
            {server.webServer == "nginx" && !server.nginx && (
              <Typography variant="subtitle2" style={{ marginTop: 10 }}>
                You are currently using Nginx.{" "}
                <Link
                  color="inherit"
                  className={classes.link}
                  onClick={() => handleChangeWebServer("apache")}
                >
                  Switch to Apache
                </Link>
              </Typography>
            )}
            {server.webServer == "apache" && !server.apache && (
              <Typography variant="subtitle2" style={{ marginTop: 10 }}>
                You are currently using Apache.{" "}
                <Link
                  color="inherit"
                  className={classes.link}
                  onClick={() => handleChangeWebServer("nginx")}
                >
                  Switch to Nginx
                </Link>
              </Typography>
            )}
            {server.webServer == "" && (
              <Typography variant="subtitle2" style={{ marginTop: 10 }}>
                You have to install web server (Apache or Nginx) before
                installing WordPress.
              </Typography>
            )}
          </Paper>
          <Box>
            <Form
              classes={classes}
              server={server}
              app={app}
              handleSubmit={handleSubmit}
              isLoading={create.isLoading}
            />
          </Box>
        </Box>
      )}
    </Layout>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    // flexWrap: "wrap",
    gridTemplateColumns: "repeat(auto-fit, minmax(125px, 1fr))",
    gap: 10,
    // height: 150
    // marginBottom: 20,
    // justifyContent: "space-between",
    "& > *": {
      // margin: theme.spacing(1),
      // width: theme.spacing(16),
      // height: theme.spacing(16),
    },
  },
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
  list: {
    backgroundColor: "white",
    borderRadius: 5,
  },
  form: {
    marginBlock: "3px",
  },
  link: {
    cursor: "pointer",
    fontWeight: 700,
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));

const listApp = [
  {
    name: "Nginx",
    icon: "/nginx.svg",
    type: "app",
    stack: "nginx",
    port: 80,
  },
  {
    name: "Apache",
    icon: "/apache.svg",
    type: "app",
    stack: "apache",
    port: 80,
  },
  {
    name: "MySQL",
    icon: "/mysql.svg",
    type: "app",
    port: 3306,
  },
  {
    name: "MongoDB",
    icon: "/mongodb.svg",
    type: "app",
    port: 27017,
  },
  {
    name: "Docker",
    icon: "/docker.svg",
    type: "app",
  },
  {
    name: "WordPress",
    icon: "/wordpress-circular.svg",
    type: "wordpress",
  },
  {
    name: "LEMP",
    icon: "/lemp.svg",
    type: "web",
    stack: "lemp",
  },
  {
    name: "LAMP",
    icon: "/lamp.svg",
    type: "web",
    stack: "lamp",
  },
];

const steps = {
  docker: [
    {
      name: "Installing app",
      parts: 8,
    },
    {
      name: "Finish",
      parts: 1,
    },
  ],
  mysql: [
    {
      name: "Installing app",
      parts: 7,
    },
    {
      name: "Finish",
      parts: 1,
    },
  ],
  mongodb: [
    {
      name: "Installing app",
      parts: 6,
    },
    {
      name: "Finish",
      parts: 1,
    },
  ],
  apache: [
    {
      name: "Installing app",
      parts: 2,
    },
    {
      name: "Finish",
      parts: 1,
    },
  ],
  nginx: [
    {
      name: "Installing app",
      parts: 2,
    },
    {
      name: "Finish",
      parts: 1,
    },
  ],
  lamp: [
    {
      name: "Installing app",
      parts: 18,
    },
    {
      name: "Finish",
      parts: 1,
    },
  ],
  lemp: [
    {
      name: "Installing app",
      parts: 18,
    },
    {
      name: "Finish",
      parts: 1,
    },
  ],
  "wp-lamp": [
    {
      name: "Installing app",
      parts: 30,
    },
    {
      name: "Finish",
      parts: 1,
    },
  ],
  "wp-lemp": [
    {
      name: "Installing app",
      parts: 30,
    },
    {
      name: "Finish",
      parts: 1,
    },
  ],
};
