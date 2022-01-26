import React from "react";
import {
  Container,
  makeStyles,
  Typography,
  OutlinedInput,
  FormControl,
  InputLabel,
  FormHelperText,
  InputAdornment,
  IconButton,
} from "@material-ui/core";

import { VisibilityOutlined, VisibilityOffOutlined } from "@material-ui/icons";

export default function IPInput({
  className,
  label,
  placeholder,
  name,
  handleBlur,
  handleChange,
  values,
  errors,
  touched,
  required,
}) {
  return (
    <FormControl className={className} fullWidth>
      <Typography variant="subtitle2">
        {label || name.replace(name[0], name[0].toUpperCase())}
      </Typography>
      <OutlinedInput
        name={name}
        type="text"
        value={values[name]}
        placeholder={placeholder}
        margin="dense"
        error={touched[name] && !!errors[name]}
        onBlur={handleBlur}
        onChange={handleChange}
        style={{
          backgroundColor: "#FDFDFD",
        }}
        required={required}
      />
      <FormHelperText disabled={!touched[name] || !errors[name]} error>
        {touched[name] && errors[name]}
      </FormHelperText>
    </FormControl>
  );
}
