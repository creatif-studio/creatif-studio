import { makeStyles, Grid, Typography } from "@material-ui/core";

export default function Detail({ label, value }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.detail} spacing={3}>
      <Grid item xs={4}>
        <Typography variant="body1" className={classes.bold}>
          {label}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">{value}</Typography>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  detail: {
    padding: 0,
  },
  bold: {
    fontWeight: theme.typography.fontWeightSemiBold,
    opacity: "80%",
  },
}));
