import React from "react";
import {
  Container,
  makeStyles,
  Typography,
  OutlinedInput,
  FormControl,
  InputLabel,
  TextField,
  FormHelperText,
  Button,
} from "@material-ui/core";

import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import { Formik } from "formik";
import { useRouter } from "next/router";

import Input from "./Input";
import Select from "./Select";
import PhoneInput from "./PhoneInput";

export default function Form({ text, data, schema, handleSubmit, isLoading }) {
  const classes = useStyles();
  const router = useRouter();
  const [initialValues, setInitialValues] = React.useState({});
  const [inputValue, setInputValue] = React.useState("");

  React.useEffect(() => {
    let val = {};
    data.map((e) => {
      val[e.name] = "";
    });
    setInitialValues(val);
  }, []);

  const OPTIONS_LIMIT = 5;
  const defaultFilterOptions = createFilterOptions();

  const filterOptions = (options, state) => {
    return defaultFilterOptions(options, state).slice(0, OPTIONS_LIMIT);
  };

  return (
    <Container className={classes.container} maxWidth="xs">
      <Typography variant="h4" className={classes.bold}>
        {text.title}
      </Typography>
      <Typography variant="subtitle1" paragraph>
        {text.subtitle}{" "}
        <span className={classes.bold} onClick={() => router.push(text.route)}>
          {text.title2}
        </span>
      </Typography>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        initialValues={initialValues}
      >
        {({
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
        }) => (
          <form
            className={classes.root}
            noValidate
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            {data.map((input, i) => {
              switch (input.type) {
                case "select":
                  return (
                    <Autocomplete
                      options={input.options}
                      getOptionLabel={(option) => option.name}
                      name={input.name}
                      groupBy={(option) => option.region}
                      filterOptions={filterOptions}
                      renderInput={(params) => (
                        <FormControl
                          className={classes.form}
                          fullWidth
                          ref={params.InputProps.ref}
                        >
                          <Typography variant="subtitle2">
                            {input.label}
                          </Typography>
                          <TextField
                            {...params}
                            type="text"
                            placeholder={input.placeholder}
                            margin="dense"
                            style={{
                              backgroundColor: "#FAFAFA",
                              marginTop: 0,
                            }}
                            variant="outlined"
                          />
                        </FormControl>
                      )}
                      value={values[input.name]}
                      onChange={(event, newValue) => {
                        setFieldValue(input.name, newValue?.name || "");
                      }}
                      inputValue={inputValue}
                      onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                      }}
                      key={i}
                    />
                  );
                case "phone":
                  return (
                    <PhoneInput
                      name={input.name}
                      className={classes.form}
                      values={values}
                      errors={errors}
                      touched={touched}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                      key={i}
                    />
                  );
                default:
                  return (
                    <Input
                      name={input.name}
                      className={classes.form}
                      placeholder={input.placeholder}
                      values={values}
                      errors={errors}
                      touched={touched}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
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
              {text.button}
            </Button>
            {text.title == "Sign Up" && (
              <Typography variant="caption" align="center" display="block">
                By signing up, you agree to the{" "}
                <strong>Terms of Service</strong>
              </Typography>
            )}
          </form>
        )}
      </Formik>
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
    cursor: "pointer",
  },
  form: {
    marginBlock: "3px",
  },
}));
