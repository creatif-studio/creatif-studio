import React from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import * as yup from "yup";

import Form from "./components/Form";
import LoginForm from "./components/LoginForm";
import { useAuthentication } from "hooks/auth";
import { setToken } from "utils/api";
import useNotif from "hooks/notif";

export default function Login() {
  const classes = useStyles();
  const router = useRouter();
  const notif = useNotif();
  const { login } = useAuthentication();

  const handleSubmit = async (values) => {
    try {
      const {
        data: { data },
      } = await login.mutateAsync(values);

      Cookies.set("token", data.accessToken, { expires: 30 });
      localStorage.setItem("token", data.accessToken);
      setToken(data.accessToken);

      router.push("/servers");
    } catch (error) {
      console.error(error.response);
      let message = "";
      switch (error.response.status) {
        case 404:
          message = "You haven't registered to CloudBoz";
          break;
        case 400:
          message = "The email or password is incorrect. Please try again.";
          break;
        default:
          message = "Internal server error";
          break;
      }
      notif.error(message);
    }
  };

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
        <LoginForm onSubmit={handleSubmit} isLoading={login.isLoading} />
      </Container>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    backgroundColor: "white",
    alignContent: "center",
    alignItems: "center",
    display: "flex",
    // backgroundImage: `url(${bg})`,
    // backgroundSize: "cover",
    // backgroundPosition: "center",
  },
  logo: {
    fontWeight: "bold",
    marginBottom: theme.spacing(3),
    cursor: "pointer",
  },
}));
