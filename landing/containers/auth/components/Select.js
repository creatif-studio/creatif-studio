import React from "react";
import {
  Container,
  makeStyles,
  Typography,
  OutlinedInput,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";

import Autocomplete from "@material-ui/lab/Autocomplete";

export default function SelectInput({
  className,
  label,
  placeholder,
  name,
  handleBlur,
  handleChange,
  values,
  errors,
  touched,
  options,
  renderOption,
}) {
  const [inputValue, setInputValue] = React.useState("");
  return (
    <FormControl className={className} fullWidth>
      <Typography variant="subtitle2">
        {label || name.replace(name[0], name[0].toUpperCase())}
      </Typography>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option[renderOption]}
        renderInput={(params) => <OutlinedInput {...params} margin="dense" />}
        value={values[name]}
        onChange={handleChange}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
      />
      {/* <Select
        name={name}
        value={values[name]}
        // placeholder={placeholder}
        margin="dense"
        onBlur={handleBlur}
        onChange={handleChange}
        style={{
          backgroundColor: "#FAFAFA",
        }}
        variant="outlined"
        renderValue={(selected) => selected}
        defaultValue={options[0][renderOption]}
      >
        {options.map((opt, i) => (
          <MenuItem value={opt[renderOption]} key={i}>
            {opt[renderOption]}
          </MenuItem>
        ))}
      </Select> */}
    </FormControl>
  );
}
