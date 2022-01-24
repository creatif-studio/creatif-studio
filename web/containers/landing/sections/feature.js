import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";

export default function Feature() {
  const classes = useStyles();

  return (
    <Container maxWidth={false} id="features">
      <Container maxWidth="lg" className={classes.container}>
        <Typography
          variant="h4"
          align="center"
          className={classes.bold}
          paragraph
        >
          AN AUTOPILOT FOR SERVER
        </Typography>
        <Typography
          variant="subtitle1"
          className={classes.sub}
          align="center"
          paragraph
        >
          Tools for teams, from startup to enterprise
        </Typography>
        <Grid container spacing={2} className={classes.grid}>
          <Grid item xs>
            <Paper className={classes.item}>
              <Typography variant="h6" paragraph className={classes.paper}>
                Security and Firewall
              </Typography>
              <Typography>
                Automate updates system, secure architecture.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.item}>
              <Typography variant="h6" paragraph className={classes.paper}>
                Service Management
              </Typography>
              <Typography variant="body1">
                Manage and monitoring multiple server with one dashboard
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.item}>
              <Typography variant="h6" paragraph className={classes.paper}>
                Server Optimization
              </Typography>
              <Typography>
                By default we update kernel configuration and performance
                optimization
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.item}>
              <Typography variant="h6" paragraph className={classes.paper}>
                One-click Install Apps or CMS
              </Typography>
              <Typography>
                Support all your favourite Application or CMS like WordPress
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  item: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    height: "100%",
  },
  grid: {
    justifyContent: "center",
    marginBlockEnd: theme.spacing(5),
  },
  bold: {
    fontWeight: 600,
  },
  sub: {
    paddingInline: theme.spacing(12),
    marginBottom: 30,
    [theme.breakpoints.down("xs")]: {
      paddingInline: theme.spacing(2),
    },
  },
  paper: {
    [theme.breakpoints.up("xl")]: {
      fontSize: 24,
    },
  },
}));
