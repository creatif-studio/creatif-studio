import { Container, makeStyles, Typography } from "@material-ui/core";

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.bg}>
      <Container maxWidth="lg" className={classes.container}>
        <Typography variant="body2">
          Copyright 2021 - CloudBoz. All rights reserved.
        </Typography>
      </Container>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundColor: theme.palette.primary.dark,
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    color: "white",
  },
}));
