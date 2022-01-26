import React from "react";
import {
  Dialog,
  DialogContent,
  Slide,
  Paper,
  IconButton,
  makeStyles,
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  modal: {},
  paper: {
    padding: "30px 30px",
    borderRadius: 50,
    "&:first-child": {
      padding: "25px 30px",
    },
  },
  closeButton: {
    position: "absolute",
    right: 35,
    top: 35,
    padding: 0,
    color: theme.palette.grey[500],
  },
}));

export default function Modal({
  open,
  handleClose,
  size,
  children,
  keepOnClickAway = false,
  fullWidth = false,
}) {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      className={classes.modal}
      TransitionComponent={Transition}
      disableBackdropClick={keepOnClickAway}
      disableEscapeKeyDown={keepOnClickAway}
      maxWidth={size}
      fullWidth={fullWidth}
    >
      {keepOnClickAway && (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={handleClose}
        >
          <CloseIcon fontSize="32px" />
        </IconButton>
      )}
      <DialogContent className={classes.paper}>{children}</DialogContent>
    </Dialog>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
