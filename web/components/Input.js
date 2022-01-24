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

export default function Input({
  className,
  label,
  placeholder,
  name,
  handleBlur,
  handleChange,
  values,
  value,
  errors,
  touched,
  required,
  multiline = false,
  rows = 5,
  autoFocus = false,
}) {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <FormControl className={className} style={{ marginBlock: 3 }} fullWidth>
      <Typography variant="subtitle2">
        {label || name.replace(name[0], name[0].toUpperCase())}
      </Typography>
      <OutlinedInput
        name={name}
        type={
          name.includes("password")
            ? showPassword
              ? "text"
              : "password"
            : name == "email"
            ? "email"
            : "text"
        }
        value={values ? values[name] : value}
        multiline={multiline}
        fullWidth
        autoFocus={autoFocus}
        rows={rows}
        placeholder={placeholder}
        margin="dense"
        error={touched[name] && !!errors[name]}
        onBlur={handleBlur}
        onChange={handleChange}
        style={{
          backgroundColor: "#FDFDFD",
        }}
        required={required}
        endAdornment={
          name.includes("password") && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOutlined />
                ) : (
                  <VisibilityOffOutlined />
                )}
              </IconButton>
            </InputAdornment>
          )
        }
      />
      <FormHelperText disabled={!touched[name] || !errors[name]} error>
        {touched[name] && errors[name]}
      </FormHelperText>
    </FormControl>
  );
}
