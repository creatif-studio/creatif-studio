import React from "react";
import {
  Typography,
  Grid,
  Button,
  OutlinedInput,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import { Formik, useFormik } from "formik";
import * as yup from "yup";

import Select from "components/Select";
import Input from "components/Input";
import FormUser from "./FormUser";

import useServer from "hooks/server";
import { API } from "utils/api";

export default function FormApp({
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
  });

  const initialValues = {
    name: app.name,
    type: app.name.toLowerCase(),
    systemUser: {
      id: users?.[0].id,
      username: users?.[0].username,
      password: "",
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

  React.useEffect(() => {
    setFieldValue("name", app.name);
    setFieldValue("type", app.name.toLowerCase());
  }, [app]);

  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <form noValidate onSubmit={handleSubmit} autoComplete="off">
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <FormControl style={{ marginBlock: 3 }} fullWidth>
            <Typography variant="subtitle2">Name</Typography>
            <OutlinedInput
              name="name"
              type="text"
              value={app.name}
              fullWidth
              disabled={true}
              margin="dense"
            />
            <FormHelperText disabled></FormHelperText>
          </FormControl>
          {app.port && (
            <FormControl style={{ marginBlock: 3 }} fullWidth>
              <Typography variant="subtitle2">Remote Access</Typography>
              <OutlinedInput
                name="name"
                type="text"
                value={server.ip + ":" + app.port}
                fullWidth
                disabled={true}
                margin="dense"
              />
              <FormHelperText disabled></FormHelperText>
            </FormControl>
          )}
          {/* <Input name="name" label="Name" value={name} disabled />
          <Input name="name" label="Name" value={name} disabled /> */}
          <FormUser
            {...defaultProps}
            classes={classes}
            options={users}
            setFieldValue={setFieldValue}
            createUser={createUser}
            setCreateUser={setCreateUser}
          />
        </Grid>
        <Grid item sm={6}></Grid>
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
