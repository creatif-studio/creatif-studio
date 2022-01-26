import React from "react";
import {
  makeStyles,
  FormControlLabel,
  Typography,
  Checkbox,
} from "@material-ui/core";

import Input from "components/Input";
import Select from "components/Select";
import Switch from "components/Switch";

const data = [
  { name: "systemUser.username", label: "Username", placeholder: "ubuntu" },
  { name: "systemUser.password", label: "Password", placeholder: "*****" },
];

export default function FormUser({
  values,
  options,
  errors,
  touched,
  handleBlur,
  handleChange,
  classes,
  setFieldValue,
  createUser,
  setCreateUser,
}) {
  const handleCreateUser = async () => {
    setCreateUser(!createUser);
  };

  const defaultProps = {
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
  };

  const emptyValues = {
    systemUser: {
      id: "",
      username: "",
      password: "",
    },
  };

  React.useEffect(async () => {
    if (createUser) {
      await setFieldValue("systemUser", emptyValues.systemUser);
      setFieldValue("createUser", createUser);
    } else {
      await setFieldValue("systemUser", {
        id: options[0].id,
        username: options[0].username,
        password: "",
      });
      setFieldValue("createUser", createUser);
    }
  }, [createUser]);

  return (
    <>
      {/* <FormControlLabel
        control={
          <Switch
            checked={createUser}
            onChange={handleCreateUser}
            name="createUser"
          />
        }
        label="Create new system user"
      /> */}
      {createUser ? (
        <>
          <Input
            name="systemUser.username"
            label="Username"
            placeholder="e.g. ubuntu"
            {...defaultProps}
          />
          <Input
            name="systemUser.password"
            label="Password"
            placeholder="*********"
            {...defaultProps}
          />
        </>
      ) : (
        <Select
          name="systemUser"
          label="System User"
          placeholder="ubuntu"
          options={options}
          renderOption="username"
          className={classes.form}
          values={values.systemUser}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={(e) => {
            const { id, username } = e.target.value;

            setFieldValue("systemUser", {
              id,
              username,
              password: "",
            });
          }}
        />
      )}
    </>
  );
}
