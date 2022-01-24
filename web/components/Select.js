import {
  Container,
  makeStyles,
  Typography,
  OutlinedInput,
  FormControl,
  InputLabel,
  FormHelperText,
  InputAdornment,
  Select,
  MenuItem,
  IconButton,
} from "@material-ui/core";

import { VisibilityOutlined, VisibilityOffOutlined } from "@material-ui/icons";

export default function SelectInput({
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
  options,
  renderOption,
}) {
  return (
    <FormControl className={className} fullWidth>
      <Typography variant="subtitle2">
        {label || name.replace(name[0], name[0].toUpperCase())}
      </Typography>
      <Select
        name={name}
        value={values ? values[name] : value}
        // placeholder={placeholder}
        margin="dense"
        onBlur={handleBlur}
        onChange={handleChange}
        style={{
          backgroundColor: "#FDFDFD",
        }}
        variant="outlined"
        renderValue={(selected) => selected[renderOption]}
        defaultValue={options[0]}
      >
        {options.map((opt, i) => (
          <MenuItem value={opt} key={i}>
            {opt[renderOption]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
