import InvalidToken from "containers/auth/invalidToken";

import React from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import * as yup from "yup";

import Form from "./components/Form";
import Snackbar from "components/Snackbar";
import ResetForm from "./components/ResetForm";
import { setToken } from "utils/api";
import { useAuthentication } from "hooks/auth";

export default function BeginForgot({ verified, token }) {
  const classes = useStyles();
  const router = useRouter();
  const { resetPassword } = useAuthentication();
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = async (values) => {
    try {
      const {
        data: { data },
      } = await resetPassword.mutateAsync({
        ...values,
        token,
      });

      Cookies.remove("email");
      localStorage.removeItem("email");

      router.push("/login");
    } catch (error) {
      console.error(error.response);
      switch (error.response.status) {
        case 403:
          setMessage("Token is invalid");
          break;
        case 400:
          setMessage("The email or password is incorrect. Please try again.");
          break;
        default:
          setMessage("Internal server error");
          break;
      }
      setOpen(true);
    }
  };

  if (!verified) return <InvalidToken />;

  return (
    <Container className={classes.container} disableGutters maxWidth={false}>
      <Image
        alt="Abstract"
        src="/bg.png"
        layout="fill"
        objectFit="cover"
        quality={100}
        style={{ zIndex: 0 }}
      />
      <Container style={{ zIndex: 1 }}>
        <Typography
          variant="h5"
          className={classes.logo}
          align="center"
          onClick={() => router.push("/")}
        >
          CloudBoz
        </Typography>
        <ResetForm
          onSubmit={handleSubmit}
          isLoading={resetPassword.isLoading}
        />
        <Snackbar
          severity="error"
          message={message}
          open={open}
          handleClose={handleClose}
        />
      </Container>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    background: "linear-gradient(45deg, #031C29 0%, #072A3C 100%)",
    height: "100vh",
    // backgroundColor: "white",
    alignContent: "center",
    alignItems: "center",
    display: "flex",
  },
  logo: {
    fontWeight: "bold",
    marginBottom: theme.spacing(3),
    color: "white",
    cursor: "pointer",
  },
}));
