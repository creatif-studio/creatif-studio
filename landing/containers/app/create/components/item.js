import { Paper, Typography, makeStyles, Box } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 5,
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
    paddingBlock: 25,
    paddingInline: 25,
    cursor: "pointer",
    height: 125,
    position: "relative",
    zIndex: 0,
    backgroundColor: "#FDFDFD",
    borderColor: "rgba(0, 0, 0, 0.23)",
  },
  hover: {
    "&:hover": {
      borderWidth: 2,
      borderColor: theme.palette.secondary.main,
      backgroundColor: theme.palette.common.white,
    },
  },
  disabled: {
    cursor: "not-allowed",
    opacity: 0.5,
    backgroundColor: theme.palette.common.gray,
  },
  active: {
    borderWidth: 2,
    borderColor: theme.palette.secondary.main,
    backgroundColor: theme.palette.common.white,
  },
  icon: {
    height: 45,
    height: 45,
    display: "block",
    justifySelf: "center",
    marginBottom: 10,
  },
  check: {
    position: "absolute",
    // float: "right",
    right: 5,
    top: 5,
  },
  bold: {
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

export default function Item({ icon, name, active, disabled, onClick }) {
  const classes = useStyles();

  return (
    <Paper
      variant="outlined"
      className={clsx(
        classes.root,
        !disabled && classes.hover,
        active && classes.active,
        !!disabled && classes.disabled
      )}
      onClick={!disabled ? onClick : null}
    >
      {active && (
        <CheckCircleIcon color="secondary" className={classes.check} />
      )}
      <img src={icon} className={classes.icon} />
      <Typography align="center" variant="body2" className={classes.bold}>
        {name}
      </Typography>
    </Paper>
  );
}
