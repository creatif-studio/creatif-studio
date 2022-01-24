import React from "react";
import { Container, Typography, Button, makeStyles } from "@material-ui/core";
import { useRouter } from "next/router";

export default function InvalidToken() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Container className={classes.wrapper} disableGutters maxWidth={false}>
      <Container maxWidth="sm" className={classes.container}>
        <Typography variant="h4" className={classes.title} align="center">
          Verification Failed
        </Typography>
        <img src="/token-invalid.svg" className={classes.image} />
        <Typography variant="body1" className={classes.content} align="center">
          Your verification token is invalid, we cannot process your request.
        </Typography>
      </Container>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100vh",
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    display: "grid",
  },
  container: {
    display: "grid",
    justifyItems: "center",
  },
  title: {
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: 45,
  },
  content: {
    // fontWeight: theme.typography.fontWeightMedium,
    marginBottom: 30,
    // width: 750,
  },
  image: {
    display: "block",
    height: 250,
    marginBottom: 30,
  },
  btn: {
    borderRadius: 30,
    paddingInline: 25,
  },
}));
