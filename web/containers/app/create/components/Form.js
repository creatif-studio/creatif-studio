import { Paper, makeStyles } from "@material-ui/core";
import FormApp from "./FormApp";
import FormWeb from "./FormWeb";
import FormWP from "./FormWP";

export default function Form(props) {
  const classes = useStyles();

  switch (props.app.type) {
    case "app":
      return (
        <Paper variant="outlined" className={classes.root}>
          <FormApp {...props} />
        </Paper>
      );
    case "web":
      return (
        <Paper variant="outlined" className={classes.root}>
          <FormWeb {...props} />
        </Paper>
      );
    case "wordpress":
      return (
        <Paper variant="outlined" className={classes.root}>
          <FormWP {...props} />
        </Paper>
      );
    default:
      return <></>;
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 30,
  },
}));
