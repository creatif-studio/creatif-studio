import { Link as MuiLink, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link: {
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));

export default function Link(props) {
  const classes = useStyles();
  return (
    <MuiLink {...props} className={classes.link}>
      {props.children}
    </MuiLink>
  );
}
