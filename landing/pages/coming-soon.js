import { makeStyles, Container, Typography } from "@material-ui/core";
import "@fontsource/rokkitt/100.css";
import "@fontsource/rokkitt/500.css";

export default function ComingSoon() {
  const classes = useStyles();

  return (
    <Container disableGutters maxWidth={false} className={classes.container}>
      <Typography align="center" className={classes.date}>
        25.7.21
      </Typography>
      <Typography align="center" className={classes.text}>
        we're coming soon
      </Typography>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    background: "linear-gradient(235deg, #031C29 0%, #072A3C 100%)",
    // backgroundColor: theme.palette.primary.dark,
    height: "100vh",
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    display: "grid",
  },
  date: {
    fontFamily: "Rokkitt, serif",
    color: "white",
    fontSize: theme.typography.pxToRem(144),
    fontWeight: 100,
    lineHeight: "0.75em",
    margin: 0,
  },
  text: {
    fontFamily: "Rokkitt, serif",
    color: "white",
    fontSize: theme.typography.pxToRem(32),
    fontWeight: 500,
    letterSpacing: "0.4em",
    margin: 0,
  },
}));
