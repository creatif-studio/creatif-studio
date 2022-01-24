import { makeStyles, Grid, Typography, Paper } from "@material-ui/core";

const padding = 35;

export default function Section({ name, children }) {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item sm={4} className={classes.name}>
        <Typography variant="h6" paragraph style={{ marginTop: 35 }}>
          {name}
        </Typography>
      </Grid>
      <Grid item sm={8}>
        <Paper className={classes.wrapper} variant="outlined">
          {children}
        </Paper>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  name: {
    paddingTop: padding,
  },
  wrapper: {
    padding: padding,
    marginBottom: padding / 3,
  },
}));
