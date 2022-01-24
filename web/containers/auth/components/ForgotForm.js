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
      <Typography
        variant="h4"
        gutterBottom
        style={{ lineHeight: "1em" }}
        className={classes.bold}
      >
        Forgot your password?
      </Typography>
      <Typography variant="subtitle1" style={{ lineHeight: "1.2em" }} paragraph>
        We'll email you instructions on how to reset your password.
      </Typography>

      <form
        className={classes.root}
        noValidate
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <Input
          name="email"
          placeholder="e.g. mail@cloudboz.com"
          autoFocus
          {...defaultProps}
        />

        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          type="submit"
          style={{ marginTop: "20px", marginBottom: "3px" }}
          disabled={!dirty || !isValid || isLoading}
        >
          Send me instructions
        </Button>
        <Typography align="center" variant="subtitle2" className={classes.link}>
          <Link href="/login" color="inherit">
            Back to login
          </Link>
        </Typography>
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
    marginTop: 7,
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));
