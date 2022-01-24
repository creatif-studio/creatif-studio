import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { useSnackbar } from "notistack";

export default function useNotif() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const style = {
    color: "white",
    padding: 0,
    marginRight: 8,
  };

  function warning(message) {
    enqueueSnackbar(message, {
      variant: "warning",
      action: (key) => (
        <IconButton style={style} onClick={() => closeSnackbar(key)}>
          <CloseIcon color="inherit" />
        </IconButton>
      ),
    });
  }

  function info(message) {
    enqueueSnackbar(message, {
      variant: "info",
      action: (key) => (
        <IconButton style={style} onClick={() => closeSnackbar(key)}>
          <CloseIcon color="inherit" />
        </IconButton>
      ),
    });
  }

  function error(message) {
    // delete message contain
    let msg = message;

    // get safe
    if (msg === null || msg === undefined) {
      msg = "";
    }

    enqueueSnackbar(msg, {
      variant: "error",
      // style: { whiteSpace: "pre-line" },
      action: (key) => (
        <IconButton style={style} onClick={() => closeSnackbar(key)}>
          <CloseIcon color="inherit" />
        </IconButton>
      ),
    });
  }

  function success(message) {
    enqueueSnackbar(message, {
      variant: "success",
      action: (key) => (
        <IconButton style={style} onClick={() => closeSnackbar(key)}>
          <CloseIcon color="inherit" />
        </IconButton>
      ),
    });
  }

  return {
    warning,
    error,
    success,
    info,
  };
}
