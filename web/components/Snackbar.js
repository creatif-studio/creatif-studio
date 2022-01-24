import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Snackbar as MuiSnackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Snackbar({ open, severity, message, handleClose }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <MuiSnackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </MuiSnackbar>
    </Box>
  );
}
