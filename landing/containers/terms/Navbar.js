import React from "react";
import clsx from "clsx";

import {
  AppBar,
  Container,
  Typography,
  Tab,
  Toolbar,
  Button,
  Hidden,
  IconButton,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

import { useRouter } from "next/router";

import { StyledTab } from "containers/landing/components/Tab";

export default function Navbar({ className, handleDrawerToggle }) {
  const classes = useStyles();
  const router = useRouter();

  return (
    <>
      <AppBar
        className={clsx(classes.navbar, className && className)}
        elevation={0}
        position="fixed"
      >
        <Container>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h5">CloudBoz</Typography>
            <div className={classes.grow} />
            <Hidden smDown>
              <StyledTab
                label="Documentation"
                href="https://docs.cloudboz.com"
              />
              <StyledTab label="Login" href="/login" />
              <Button
                variant="contained"
                color="primary"
                className={classes.primary}
                href="/register"
              >
                SIGN UP
              </Button>
            </Hidden>
            {handleDrawerToggle && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar style={{ position: "sticky", top: 0 }} />
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
  menuButton: {
    padding: 0,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));
