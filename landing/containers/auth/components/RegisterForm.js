import React from "react";
import {
  Container,
  makeStyles,
  Typography,
  FormControl,
  FormHelperText,
  TextField,
  Button,
  Link,
} from "@material-ui/core";

import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";

import { useFormik } from "formik";
import { useRouter } from "next/router";

import * as yup from "yup";

import Input from "./Input";
import PhoneInput from "./PhoneInput";

import countries from "utils/country-list.json";

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email("Please enter a valid email").required(),
  password: yup.string().min(8, "Too short!").required(),
  phone: yup.string().min(6).required(),
  country: yup.string().required(),
  job: yup.string().required(),
});

export default function Form({ onSubmit, isLoading }) {
  const classes = useStyles();
  const router = useRouter();
  const [value, setValue] = React.useState({});
  const [inputValue, setInputValue] = React.useState("");

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
  } = useFormik({
    validationSchema: schema,
    onSubmit: (values) => {
      onSubmit(values);
    },
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      country: "",
      job: "",
    },
  });

  const defaultProps = {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
  };

  const filterOptions = createFilterOptions({
    limit: 5,
    // stringify: (option) => option.name,
  });

  const data = [
    { name: "name", placeholder: "e.g. John Doe" },
    { name: "email", placeholder: "e.g. mail@cloudboz.com" },
    { name: "password", placeholder: "********" },
    { name: "phone", placeholder: "+6281222222222", type: "phone" },
    {
      name: "country",
      label: "Country",
      placeholder: "e.g. Indonesia",
      type: "select",
      options: countries,
    },
    { name: "job", placeholder: "e.g. Programmer" },
  ];

  return (
    <Container className={classes.container} maxWidth="xs">
      <Typography variant="h4" className={classes.bold}>
        Sign Up
      </Typography>
      <Typography variant="subtitle1" paragraph>
        Already have an account?{" "}
        <Link href="/login" color="inherit" className={classes.link}>
          Login
        </Link>
      </Typography>

      <form className={classes.root} noValidate onSubmit={handleSubmit}>
        {data.map((input, i) => {
          switch (input.type) {
            case "select":
              return (
                <Autocomplete
                  options={input.options}
                  getOptionLabel={(option) =>
                    typeof option === "string" ? option : option.name
                  }
                  getOptionSelected={(option, value) => option.name == ""}
                  name={input.name}
                  groupBy={(option) => option.region}
                  filterOptions={filterOptions}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                    setFieldValue("country", newValue.name);
                  }}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                  }}
                  renderOption={(option) =>
                    typeof option === "string" ? option : option.name
                  }
                  renderInput={(params) => (
                    <FormControl
                      className={classes.form}
                      fullWidth
                      ref={params.InputProps.ref}
                    >
                      <Typography variant="subtitle2">{input.label}</Typography>
                      <TextField
                        {...params}
                        type="text"
                        placeholder={input.placeholder}
                        error={touched[input.name] && !!errors[input.name]}
                        margin="dense"
                        onBlur={handleBlur}
                        style={{
                          backgroundColor: "#FAFAFA",
                          margin: 0,
                        }}
                        variant="outlined"
                      />
                      <FormHelperText
                        disabled={!touched[input.name] || !errors[input.name]}
                        error
                      >
                        {touched[input.name] && errors[input.name]}
                      </FormHelperText>
                    </FormControl>
                  )}
                  key={i}
                />
              );
            case "phone":
              return <PhoneInput name={input.name} {...defaultProps} key={i} />;
            default:
              return (
                <Input
                  name={input.name}
                  placeholder={input.placeholder}
                  autoFocus={i == 0}
                  {...defaultProps}
                  key={i}
                />
              );
          }
        })}
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          type="submit"
          style={{ marginTop: "25px", marginBottom: "3px" }}
          disabled={!dirty || !isValid || isLoading}
        >
          Create Account
        </Button>

        <Typography variant="caption" align="center" display="block">
          By signing up, you agree to the{" "}
          <Link href="/tos" color="inherit" className={classes.link}>
            <strong>Terms of Service</strong>
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
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  form: {
    marginTop: "3px",
    marginBottom: "3px",
  },
}));
