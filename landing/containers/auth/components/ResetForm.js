import React from "react";
import clsx from "clsx";
import {
  Container,
  makeStyles,
  Typography,
  Button,
  Link,
} from "@material-ui/core";

import { useFormik } from "formik";
import { useRouter } from "next/router";

import * as yup from "yup";

import Input from "./Input";

const schema = yup.object({
  password: yup.string().min(8, "Too short!").required("Password is required"),
  password2: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export default function ResetForm({ onSubmit, isLoading }) {
  const classes = useStyles();

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
    isValid,
    dirty,
  } = useFormik({
    validationSchema: schema,
    onSubmit: (values) => {
      onSubmit(values);
    },
    initialValues: {
      password: "",
      password2: "",
    },
  });

  const defaultProps = {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
  };

  return (
    <Container className={classes.container} maxWidth="sm">
      <Typography variant="h4" className={classes.bold}>
        Reset password
      </Typography>
      <Typography variant="subtitle1" paragraph>
        Create a new password.
      </Typography>

      <form
        className={classes.root}
        noValidate
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <Input
          name="password"
          placeholder="********"
          autoFocus
          {...defaultProps}
        />

        <Input
          name="password2"
          label="Repeat password"
          placeholder="********"
          {...defaultProps}
        />

        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          type="submit"
          style={{ marginTop: "25px", marginBottom: "3px" }}
          disabled={!dirty || !isValid || isLoading}
        >
          Reset password
        </Button>
      </form>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    // width: "70%",
    backgroundColor: "white",
    alignSelf: "center",
    padding: theme.spacing(4),
    borderRadius: "10px",
  },
  bold: {
    fontWeight: "bold",
  },
  link: {
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));
