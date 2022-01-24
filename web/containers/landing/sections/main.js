import {
  Button,
  Container,
  Grid,
  Typography,
  Box,
  Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";

export default function Main() {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.background}>
      <Image
        alt="Abstract"
        src="/bg.png"
        layout="fill"
        objectFit="cover"
        quality={100}
        style={{ zIndex: 0 }}
      />
      <Hidden smDown>
        <img src="/servers.svg" className={classes.image} />
      </Hidden>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container className={classes.grid}>
          <Grid item md={7} className={classes.center}>
            <Typography variant="h2" className={classes.title}>
              A simple control panel for managing cloud server
            </Typography>
            <Typography variant="h6" className={classes.subtitle}>
              We make it simple to launch application in the cloud and you don't
              need to be a linux expert to deploy a website. CloudBoz can
              create, manage apps or sites with our graphical interface.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.primary}
              href="/register"
            >
              GET STARTED
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  background: {
    background: `linear-gradient(270deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
    minHeight: 830,
    position: "relative",
    [theme.breakpoints.up("xl")]: {
      minHeight: 930,
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: 690,
      maxHeight: 690,
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: 750,
      maxHeight: 750,
    },
  },
  container: {
    height: "100%",
    alignContent: "center",
    zIndex: 2,
    position: "relative",
  },
  grid: {
    minHeight: "100vh",
    alignSelf: "center",
    color: "white",
    alignContent: "center",
    alignItem: "center",
    paddingBlock: theme.spacing(15),
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: 36,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 32,
    },
  },
  subtitle: {
    lineHeight: "1.8",
    paddingRight: theme.spacing(10),
    fontWeight: "normal",
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
      paddingRight: theme.spacing(2),
    },
  },
  primary: {
    fontSize: 20,
    fontWeight: 500,
    borderRadius: 50,
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
      paddingInline: theme.spacing(4),
      paddingBlock: theme.spacing(1),
    },
  },
  image: {
    display: "block",
    position: "absolute",
    zIndex: 2,
    right: 0,
    height: "auto",
    width: "45vw",
    top: theme.spacing(13),
    [theme.breakpoints.up("xl")]: {
      height: 950,
    },
  },
  center: {
    alignItems: "center",
    alignSelf: "center",
    alignContent: "center",
  },
}));
