import React from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import ForgotForm from "./components/ForgotForm";
import { setToken } from "utils/api";
import { useAuthentication } from "hooks/auth";
import useNotif from "hooks/notif";

export default function BeginForgot() {
  const classes = useStyles();
  const router = useRouter();
  const notif = useNotif();
  const { beginForgot } = useAuthentication();
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (values) => {
    try {
      const {
        data: { data },
      } = await beginForgot.mutateAsync(values);

      Cookies.set("email", values.email, { expires: 1 });
      localStorage.setItem("email", values.email);

      router.push("/reset-password/sent");
    } catch (error) {
      console.error(error.response);
      switch (error.response?.status) {
        case 404:
          setMessage("You haven't registered to CloudBoz");
          break;
        case 400:
          setMessage("The email or password is incorrect. Please try again.");
          break;
        default:
          setMessage("Internal server error");
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
        <ForgotForm onSubmit={handleSubmit} isLoading={beginForgot.isLoading} />
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
