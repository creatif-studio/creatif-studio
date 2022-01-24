import dynamic from "next/dynamic";
const MuiPhoneNumber = dynamic(() => import("material-ui-phone-number"), {
  ssr: false,
});
import {
  Typography,
  FormControl,
  FormHelperText,
  InputAdornment,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";

const useTooltipStyles = makeStyles((theme) => ({
  tooltip: {
    backgroundColor: "#1A1A1A",
    fontSize: 12,
    maxWidth: 400,
    padding: 10,
  },
}));

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: "3px",
    marginBottom: "3px",
  },
}));

export default function PhoneInput({
  name,
  label,
  values,
  className,
  handleBlur,
  handleChange,
  errors,
  touched,
}) {
  const classes = useStyles();
  const classesTooltip = useTooltipStyles();
  return (
    <FormControl fullWidth className={classes.form}>
      <Typography variant="subtitle2">
        {label || name.replace(name[0], name[0].toUpperCase())}
      </Typography>
      <MuiPhoneNumber
        name={name}
        variant="outlined"
        margin="dense"
        value={values[name]}
        error={touched[name] && !!errors[name]}
        defaultCountry={"id"}
        onBlur={handleBlur}
        onChange={(e) => handleChange({ target: { name, value: e } })}
        inputClass={classes.form}
        className={classes.form}
        style={{
          backgroundColor: "#FAFAFA",
          margin: 0,
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Tooltip
                classes={classesTooltip}
                title="By continuing you will recieve a one-time verification code to your phone number by SMS. Message and data charges may apply."
              >
                <IconButton aria-label="toggle info" edge="end">
                  <HelpOutlineOutlinedIcon />
                </IconButton>
              </Tooltip>
            </InputAdornment>
          ),
        }}
      />
      <FormHelperText disabled={!touched[name] || !errors[name]} error>
        {touched[name] && errors[name]}
      </FormHelperText>
    </FormControl>
  );
}
