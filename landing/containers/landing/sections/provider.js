import { Button, Container, Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function Provider() {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.background}>
      <Container maxWidth="lg" className={classes.container}>
        <Typography
          variant="h4"
          align="center"
          className={classes.bold}
          paragraph
        >
          WORKS WITH ANY SERVER TOGETHER
        </Typography>
        <Typography variant="subtitle1" className={classes.sub} align="center">
          Our product can support multiple server provider and manage multiple
          server in single dashboard
        </Typography>
        <Box variant="div" className={classes.serviceContainer}>
          <img src="/digitalocean.svg" className={classes.service} />
          <img src="/google-cloud.svg" className={classes.service} />
          <img src="/aws-2.svg" className={classes.service} />
          <img src="/azure.svg" className={classes.service} />
        </Box>
      </Container>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  image: {
    display: "block",
    position: "absolute",
    right: 0,
    height: "auto",
    width: "45vw",
    top: theme.spacing(13),
  },
  background: {
    backgroundColor: theme.palette.common.gray,
    height: 406,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      height: 570,
    },
    [theme.breakpoints.down("xs")]: {
      height: 590,
    },
  },
  container: {
    height: "100%",
    paddingTop: 100,
    position: "absolute",
    zIndex: 100,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 70,
    },
  },
  grid: {
    height: "100%",
    alignItems: "center",
    color: "white",
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
  },
  subtitle: {
    lineHeight: "1.8",
    paddingRight: theme.spacing(10),
    fontWeight: "normal",
    marginBottom: theme.spacing(5),
  },
  bold: {
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
      fontSize: 32,
    },
  },
  sub: {
    paddingInline: theme.spacing(12),
    [theme.breakpoints.down("xs")]: {
      paddingInline: theme.spacing(2),
    },
  },
  serviceContainer: {
    textAlign: "center",
    marginTop: 50,
  },
  service: {
    marginInline: 20,
    height: 35,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 15,
    },
  },
}));
