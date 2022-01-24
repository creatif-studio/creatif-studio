import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
  TextField,
  Paper,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import { useRouter } from "next/router";

import Modal from "components/Modal";
import Section from "components/Section";
import Detail from "components/Detail";
import useApp from "hooks/app";
import useNotif from "hooks/notif";

export default function AppSettings({ app, refetch }) {
  const classes = useStyles();
  const router = useRouter();
  const notif = useNotif();
  const { deleteApp, updateApp: edit } = useApp();
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState(app.name);
  const [deleteName, setDelete] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDelete("");
  };

  const handleRename = async (e) => {
    try {
      e.preventDefault();
      await edit.mutateAsync({ id: app.id, body: { name } });
      refetch();
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleDelete = async (e) => {
    try {
      e.preventDefault();
      await deleteApp.mutateAsync(app.id);
      router.push("/apps");
    } catch (error) {
      notif.error(error.response?.data?.message);
    }
  };

  return (
    <Container disableGutters className={classes.center}>
      <Grid container className={classes.root}>
        <Grid item>
          <Typography variant="h5" paragraph>
            Settings
          </Typography>
        </Grid>
      </Grid>

      <Section name="App Information">
        <Typography variant="body1" className={classes.bold} gutterBottom>
          App Name
        </Typography>
        <Box className={classes.flex}>
          <form onSubmit={handleRename} noValidate autoComplete="off">
            <TextField
              variant="outlined"
              size="small"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              disabled={name == app.name}
              type="submit"
              style={{ marginLeft: 3 }}
            >
              Rename
            </Button>
          </form>
        </Box>
        <Typography variant="caption" paragraph>
          This is only name to display in CloudBoz.
        </Typography>

        <Detail label="Server" value={app.server.name} />
        <Detail label="Domain" value={app.domain || "-"} />
        {app.type == "lemp" && (
          <Detail label="Path" value={"/var/www/" + app.domain} />
        )}
        <Detail label="Type" value={app.type} />
        <Detail label="Databases" value={app.databases.length || 0} />
        <Detail label="System User" value={app.systemUser.username} />
      </Section>

      <Section name="Delete App">
        <Typography variant="body1" className={classes.bold}>
          Delete this app
        </Typography>
        <Typography variant="subtitle" paragraph>
          Deleting this app will remove its databases. This action is permanent
          and cannot be undone.
        </Typography>
        <Button variant="outlined" className={classes.btn} onClick={handleOpen}>
          Delete app
        </Button>
      </Section>

      <Modal open={open} handleClose={handleClose}>
        <Typography variant="h5" paragraph>
          Delete App
        </Typography>

        <Alert severity="warning" style={{ marginBottom: 30 }}>
          <Typography className={classes.bold} gutterBottom>
            You are about to delete this app
          </Typography>
          <Typography variant="body2">
            This action <b>cannot</b> be undone. This will <b>permanently</b>{" "}
            delete the <b>{app.name}</b> app and databases.
          </Typography>
        </Alert>
        <form onSubmit={handleDelete}>
          <Typography variant="body1">
            Please type <b>{app.name}</b> to confirm.
          </Typography>
          <TextField
            variant="outlined"
            margin="dense"
            fullWidth
            className={classes.input}
            value={deleteName}
            onChange={(e) => setDelete(e.target.value)}
          />
          <Button
            variant="outlined"
            className={classes.btn}
            fullWidth
            disabled={deleteName != app.name}
            type="submit"
          >
            I understand the consequences, delete app.
          </Button>
        </form>
      </Modal>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "space-between",
    marginBottom: 30,
  },
  flex: {
    display: "flex",
    columnGap: 7,
  },
  center: {
    justifyItems: "center",
  },
  bold: {
    fontWeight: theme.typography.fontWeightSemiBold,
    opacity: "80%",
  },
  btn: {
    border: `1px solid ${theme.palette.error.main}`,
    color: theme.palette.error.main,
    fontWeight: theme.typography.fontWeightMedium,
    "&:hover": {
      backgroundColor: `${theme.palette.error.main}15`,
    },
  },
  input: {
    paddingBottom: 10,
  },
}));
