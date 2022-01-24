import React from "react";
import { Grid, Button, makeStyles, FormControlLabel } from "@material-ui/core";
import { Formik, useFormik } from "formik";
import * as yup from "yup";

import Input from "components/Input";
import Select from "components/Select";
import FormUser from "./FormUser";
import useServer from "hooks/server";

const wordpress = [
  {
    name: "wordpress.title",
    label: "Title",
    placeholder: "e.g. My WordPress Blog",
  },
  { name: "wordpress.username", label: "Username", placeholder: "e.g. admin" },
  { name: "wordpress.password", label: "Password", placeholder: "*****" },
  {
    name: "wordpress.email",
    label: "Email",
    placeholder: "e.g. admin@gmail.com",
  },
];

export default function FormWP({
  app,
  classes,
  server,
  handleSubmit: handleSubmitForm,
  isLoading: isLoadingForm,
}) {
  const [createUser, setCreateUser] = React.useState(false);

  const { getSysUsersByServer } = useServer();

  const { data: users, isLoading } = getSysUsersByServer(server.id);

  const schema = yup.object({
    name: yup.string().required(),
    domain: yup.string().required(),
    type: yup.string().required(),
    createUser: yup.boolean().required(),
    systemUser: yup.object().shape({
      id: yup.string(),
      username: yup.string().required(),
      password: yup
        .string()
        .min(4)
        .when("createUser", (_, schema) => {
          return createUser ? schema.required() : schema.notRequired();
        }),
    }),
    wordpress: yup.object().shape({
      title: yup.string().required(),
      username: yup.string().required(),
      password: yup.string().required(),
      email: yup.string().email().required(),
    }),
  });

  const initialValues = {
    name: "",
    domain: "",
    type: server.webServer == "nginx" ? "wp-lemp" : "wp-lamp",
    systemUser: {
      id: users?.[0].id,
      username: users?.[0].username,
      password: "",
    },
    wordpress: {
      title: "",
      username: "",
      password: "",
      email: "",
    },
    createUser: false,
  };

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
    isValid,
    dirty,
    submitForm,
    setFieldValue,
  } = useFormik({
    initialValues,
    onSubmit: (values) => {
      handleSubmitForm(values);
    },
    validationSchema: schema,
  });

  const defaultProps = {
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
  };

  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <form noValidate onSubmit={handleSubmit} autoComplete="off">
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <Input
            name="name"
            label="Name"
            className={classes.form}
            placeholder="e.g. My App"
            {...defaultProps}
          />

          <Input
            name="domain"
            label="Domain"
            className={classes.form}
            placeholder="e.g. sub.domain.com"
            {...defaultProps}
          />

          <FormUser
            {...defaultProps}
            classes={classes}
            options={users}
            setFieldValue={setFieldValue}
            createUser={createUser}
            setCreateUser={setCreateUser}
          />
        </Grid>
        <Grid item sm={6}>
          {wordpress.map((wp, i) => (
            <Input
              name={wp.name}
              label={wp.label}
              className={classes.form}
              placeholder={wp.placeholder}
              {...defaultProps}
              key={i}
            />
          ))}
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{ marginTop: "25px", marginBottom: "3px" }}
        disabled={!isValid || isLoadingForm}
        onClick={submitForm}
      >
        Create
      </Button>
    </form>
  );
}
