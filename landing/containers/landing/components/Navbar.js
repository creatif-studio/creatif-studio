import React from "react";

import {
  AppBar,
  Container,
  Typography,
  Tab,
  Toolbar,
  Button,
  Hidden,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";

import { StyledTabs, StyledTab } from "./Tab";
import Drawer from "./Drawer";
import { useUser } from "context/auth";

export default function Navbar({ openContactUs }) {
  const classes = useStyles();
  const router = useRouter();
  const { isLoggedIn } = useUser();

  return (
    <>
      <AppBar className={classes.navbar} elevation={0} position="fixed">
        <Container>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h5">CloudBoz</Typography>
            <div className={classes.grow} />
            <Hidden smDown>
              <StyledTab label="About" href="#" />
              <StyledTab label="Contact Us" onClick={openContactUs} />
              <StyledTab
                label="Documentation"
                href="https://docs.cloudboz.com"
              />
              {!isLoggedIn && <StyledTab label="Login" href="/login" />}
              {!isLoggedIn && (
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.primary}
                  href="/register"
                >
                  SIGN UP
                </Button>
              )}
              {isLoggedIn && (
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.primary}
                  href="/servers"
                >
                  DASHBOARD
                </Button>
              )}
            </Hidden>
            <Hidden mdUp>
              <Drawer openContactUs={openContactUs} />
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  navbar: {
    padding: theme.spacing(2),
    background: `linear-gradient(270deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  },
  toolbar: {
    margin: theme.spacing(0),
    paddingInline: theme.spacing(0),
  },
  grow: {
    flexGrow: 1,
  },
  primary: {
    marginLeft: theme.spacing(2),
    borderRadius: 25,
    paddingInline: theme.spacing(3),
  },
}));
