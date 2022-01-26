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
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup.string().min(8, "Too short!").required("Password is required"),
});

export default function LoginForm({ onSubmit, isLoading }) {
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
      email: "",
      password: "",
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
    <Container className={classes.container} maxWidth="xs">
      <Typography variant="h4" className={classes.bold}>
        Sign In
      </Typography>
      <Typography variant="subtitle1" paragraph>
        Don't have an account?{" "}
        <Link
          href="/register"
          color="inherit"
          className={clsx(classes.link, classes.bold)}
        >
          Register
        </Link>
      </Typography>

      <form className={classes.root} noValidate onSubmit={handleSubmit}>
        <Input
          name="email"
          placeholder="e.g. mail@cloudboz.com"
          autoFocus
          {...defaultProps}
        />

        <Input name="password" placeholder="*********" {...defaultProps} />

        <Link href="/reset-password" color="inherit" className={classes.link}>
          Forgot your password?
        </Link>

        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          type="submit"
          style={{ marginTop: "25px", marginBottom: "3px" }}
          disabled={!dirty || !isValid || isLoading}
        >
          Login
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
