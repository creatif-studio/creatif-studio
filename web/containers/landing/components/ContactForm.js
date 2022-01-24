import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Typography, Button, makeStyles } from "@material-ui/core";

import Input from "components/Input";

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  subject: yup.string().required(),
  body: yup.string().required(),
});

export default function ContactForm({ onSubmit, isLoading }) {
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
    initialValues: {
      name: "",
      email: "",
      subject: "",
      body: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  const data = [
    { name: "name", placeholder: "e.g. John Doe" },
    { name: "email", placeholder: "e.g. example@mail.com" },
    { name: "subject", placeholder: "e.g. Hello" },
    { name: "body", placeholder: "e.g. Hello World!", multiline: true },
  ];

  const defaultProps = {
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Typography variant="h5" style={{ fontWeight: 600 }} paragraph>
        Contact Us
      </Typography>
      {data.map((input, i) => (
        <Input
          name={input.name}
          label={input.label}
          className={classes.form}
          placeholder={input.placeholder}
          multiline={input.multiline}
          {...defaultProps}
          key={i}
        />
      ))}
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.btn}
        type="submit"
        fullWidth
        disabled={!dirty || !isValid || isLoading}
      >
        Send Us Message
      </Button>
    </form>
  );
}

const useStyles = makeStyles((theme) => ({
  btn: {
    marginTop: 20,
    marginBottom: 3,
  },
  form: {
    marginBlock: "3px",
  },
}));
