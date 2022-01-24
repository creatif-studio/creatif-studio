import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "uppercase",
    color: "#fff",
    // maxWidth: "100%",
    fontWeight: theme.typography.fontWeightRegular,
    // fontSize: theme.typography.pxToRem(15),
    margin: theme.spacing(0.5),
    paddingInline: theme.spacing(2),
    paddingBlock: theme.spacing(1),
    // backgroundColor: "red",
    "&:hover": {
      opacity: 0.8,
    },
  },
}))((props) => <Button {...props}>{props.label}</Button>);

export { StyledTab };
