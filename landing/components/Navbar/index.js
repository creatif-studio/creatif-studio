import React from "react";
import { grey, red } from "@material-ui/core/colors";
import Person from "@material-ui/icons/Person";
import PersonOutline from "@material-ui/icons/PersonOutline";
import ExitToApp from "@material-ui/icons/ExitToApp";

import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Avatar,
  Hidden,
  Menu as MuiMenu,
  MenuItem as MuiMenuItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import { StyledTabs, StyledTab } from "./Tab";
import { useRouter } from "next/router";
import { useAuthentication } from "hooks/auth";
import { useUser } from "context/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    cursor: "pointer",
    marginRight: 60,
  },
  bar: {
    // height: "60px",
  },
  tabs: {},
  wrapper: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  avatar: {
    height: 45,
    width: 45,
    margin: 0,
    color: theme.palette.getContrastText(grey[300]),
    backgroundColor: grey[300],
  },
}));

export default function Navbar({ value: initValue }) {
  const classes = useStyles();
  const router = useRouter();
  const { setIsLoggedIn } = useUser();
  const { logout } = useAuthentication();
  const [value, setValue] = React.useState(initValue);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogo = () => {
    router.push("/");
  };

  const handleLogout = async () => {
    logout();
    await setIsLoggedIn(false);
    router.replace("/");
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    if (newValue == -1) setValue(false);
    else setValue(newValue);
  };

  return (
    <>
      <AppBar elevation={0} className={classes.bar}>
        <Container>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              className={classes.logo}
              onClick={handleLogo}
            >
              CloudBoz
            </Typography>
            <Hidden xsDown>
              <StyledTabs
                className={classes.tabs}
                value={value}
                onChange={handleChange}
              >
                <StyledTab label="Servers" href="/servers" />
                <StyledTab label="Apps" href="/apps" />
              </StyledTabs>
            </Hidden>
            <Box className={classes.wrapper}>
              <Avatar className={classes.avatar} onClick={handleClick}>
                <Person />
              </Avatar>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {/* <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonOutline />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </MenuItem> */}
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <ExitToApp style={{ color: red[500] }} />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

const Menu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    marginTop: 10,
  },
})((props) => (
  <MuiMenu
    elevation={0}
    variant="menu"
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const MenuItem = withStyles((theme) => ({
  root: {
    "& .MuiListItemIcon-root": {
      minWidth: 35,
    },
  },
}))(MuiMenuItem);
