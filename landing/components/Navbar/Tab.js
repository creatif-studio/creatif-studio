import { withStyles } from "@material-ui/core/styles";
import { Tabs, Tab } from "@material-ui/core";
import Link from "next/link";
import router, { useRouter } from "next/router";

const StyledTabs = withStyles((theme) => ({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: "30%",
      width: "100%",
      backgroundColor: theme.palette.secondary.main,
    },
  },
}))((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "#fff",
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(14),
    width: "100px",
    minWidth: "100px",
    "&:focus": {
      opacity: 1,
    },
  },
}))((props) => (
  <Link href={props.href} passHref>
    <Tab
      disableRipple
      component="a"
      onClick={props.onClick || null}
      {...props}
    />
  </Link>
));

export { StyledTabs, StyledTab };
