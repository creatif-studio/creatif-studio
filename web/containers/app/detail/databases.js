import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import { VisibilityOutlined, VisibilityOffOutlined } from "@material-ui/icons";

import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";
import { randomBytes } from "crypto";

import Modal from "components/Modal";
import Input from "components/Input";
import ListHeader from "components/ListHeader";
import ListItem from "components/ListItem";
import Link from "components/Link";
import Detail from "components/Detail";

import useApp from "hooks/app";
import useDatabase from "hooks/database";
import useSocket from "hooks/socket";
import useNotif from "hooks/notif";
import { useUser } from "context/auth";

const schema = yup.object({
  name: yup.string().required(),
  username: yup.string().required(),
  password: yup.string().min(4).required(),
});

export default function AppDatabases({ app, dbs, refetch }) {
  const classes = useStyles();
  const router = useRouter();
  const socket = useSocket();
  const notif = useNotif();
  const { user } = useUser();
  const { getDatabasesByApp } = useApp();
  const { createDatabase, getDatabaseByID, deleteDatabase } = useDatabase();

  const [openCreate, setOpenCreate] = React.useState(false);
  const [openView, setOpenView] = React.useState(false);
  const [choosen, setChoosen] = React.useState({});
  const [dbID, setdbID] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const { data: db, isLoading: isLoadingDB } = getDatabaseByID(dbID);

  const { mutateAsync: create, isLoading: isLoadingCreate } = createDatabase;
  const { mutateAsync: deleteDB, isLoading: isLoadingDelete } = deleteDatabase;

  React.useEffect(() => {
    if (socket) {
      socket.on("logs" + user.id, (data) => {
        console.log(data);
      });

      socket.on("done" + user.id, (data) => {
        refetch();
        notif.success(data);
      });

      socket.on("error" + user.id, (data) => {
        refetch();
        notif.error(data);
      });
    }
  }, [socket]);

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
    isValid,
    dirty,
    setFieldValue,
    setFieldTouched,
  } = useFormik({
    initialValues: {
      name: "",
      username: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      handleSubmitForm(values, resetForm);
    },
    validationSchema: schema,
  });

  const handleOpen = () => {
    setOpenCreate(true);
  };

  const handleClose = () => {
    setOpenCreate(false);
    setOpenView(false);
    setShowPassword(false);
  };

  const handleClick = (id) => {
    // console.log(id);
    setdbID(id);
    if (!isLoadingDB) setOpenView(true);
  };

  const handleGenerate = async () => {
    await setFieldValue("username", randomBytes(4).toString("hex"));
    await setFieldValue("password", randomBytes(9).toString("base64"));
    setFieldTouched("username", true);
    setFieldTouched("password", true);
  };

  const handleSubmitForm = async (values, reset) => {
    try {
      const body = {
        ...values,
        app: {
          id: app.id,
          name: app.name,
          server: {
            id: app.server.id,
            ip: app.server.ip,
          },
          systemUser: app.systemUser,
        },
      };
      const { data } = await create(body);
      reset();
      refetch();
      setOpenCreate(false);
    } catch (error) {
      console.log(error.response);
      notif.error(error.response?.data?.message);
    }
  };

  const handleDelete = async () => {
    alert("delete?");
    await deleteDB(db?.id);
    refetch();
    setOpenView(false);
  };

  const data = [
    { name: "name", label: "Name", placeholder: "e.g. my-db" },
    { name: "username", label: "User", placeholder: "e.g. ubuntu" },
    { name: "password", label: "Password", placeholder: "*****" },
  ];

  const headers = ["NAME"];
  const width = ["100%"];

  return (
    <Container disableGutters className={classes.center}>
      <Grid container className={classes.root}>
        <Grid item>
          <Typography variant="h5" paragraph>
            Databases
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Create Database
          </Button>
        </Grid>
      </Grid>

      <ListHeader items={headers} width={width} />
      {dbs?.map(({ id, name, status }, i) => (
        <ListItem
          id={id}
          path={undefined}
          status={"white"}
          onClick={() => handleClick(id)}
          renderItem={
            <>
              <Box
                style={{
                  width: width[0],
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <Typography>{name}</Typography>
                {status == "loading" && <CircularProgress size="1rem" />}
              </Box>
            </>
          }
          key={i}
        />
      ))}

      {/* -------------------- Modal View -------------------- */}
      <Modal size="xs" open={openView} handleClose={handleClose} fullWidth>
        <Typography variant="h5" paragraph>
          {db?.name}
        </Typography>
        <Detail label="User" value={db?.username} />
        <Detail
          label="Password"
          value={
            <>
              {showPassword
                ? db?.password
                : db?.password.replace(/(\w|\W)/g, "•")}{" "}
              <IconButton
                aria-label="show-password"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                style={{ marginLeft: 10, padding: 0 }}
              >
                {!showPassword ? (
                  <VisibilityOffOutlined
                    style={{
                      fontSize: 18,
                    }}
                  />
                ) : (
                  <VisibilityOutlined
                    style={{
                      fontSize: 18,
                    }}
                  />
                )}
              </IconButton>
            </>
          }
        />
        <Button
          variant="outlined"
          className={classes.btnDelete}
          fullWidth
          disabled={db?.status == "loading"}
          onClick={handleDelete}
        >
          Delete database
        </Button>
      </Modal>

      {/* -------------------- Modal Create -------------------- */}
      <Modal size="xs" open={openCreate} handleClose={handleClose}>
        <Typography variant="h5" paragraph>
          Create Database
        </Typography>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          {data.map((input, i) => (
            <Input
              name={input.name}
              label={input.label}
              className={classes.form}
              placeholder={input.placeholder}
              values={values}
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
              handleChange={handleChange}
              autoFocus={i == 0}
              key={i}
            />
          ))}
          <Link color="inherit" underline="always" onClick={handleGenerate}>
            <Typography align="right" variant="subtitle2">
              {" "}
              Generate user & password
            </Typography>
          </Link>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.btn}
            type="submit"
            fullWidth
            disabled={!dirty || !isValid || isLoadingCreate}
          >
            Create Database
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
  center: {
    justifyItems: "center",
  },
  empty: {},
  btn: {
    marginTop: 20,
    marginBottom: 3,
  },
  btnDelete: {
    marginTop: 20,
    border: `1px solid ${theme.palette.error.main}`,
    color: theme.palette.error.main,
    fontWeight: theme.typography.fontWeightMedium,
    "&:hover": {
      backgroundColor: `${theme.palette.error.main}15`,
    },
  },
  form: {
    marginBlock: "3px",
  },
}));
