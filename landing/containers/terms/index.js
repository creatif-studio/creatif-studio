import React from "react";
import {
  Container,
  Typography,
  makeStyles,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Grid,
  Hidden,
  Link,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import Image from "next/image";

import Navbar from "./Navbar";
import { Footer } from "containers/landing/sections";

export default function Terms(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const drawer = (
    <List>
      {sections.map((s, i) => (
        <ListItem key={i} button>
          <ListItemText primary={`${i + 1}. ${s.title}`} />
        </ListItem>
      ))}
    </List>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Box bgcolor="white">
      <Navbar
        className={classes.appBar}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Hidden smUp implementation="css">
        {/* for mobile */}
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={open}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>

      <Box className={classes.background}>
        <img
          src="/bg.png"
          width="100%"
          style={{
            position: "absolute",
            top: 0,
            zIndex: 0,
            objectFit: "fill",
            display: "block",
          }}
        />
        <Typography
          variant="h2"
          paragraph
          align="center"
          style={{
            fontWeight: 600,
            color: "white",
            position: "relative",
            zIndex: 1,
          }}
        >
          Terms and Conditions of Use
        </Typography>
      </Box>
      <Container className={classes.content}>
        <Grid container spacing={7} style={{ position: "relative" }}>
          <Hidden smDown>
            <Grid item sm={3}>
              <List style={{ position: "sticky", top: 120 }}>
                {sections.map((s, i) => (
                  <ListItem key={i} style={{ padding: 0 }}>
                    <Link
                      href={`#${s.id}`}
                      underline="none"
                      color="inherit"
                      paragraph
                      className={classes.sidebar}
                      variant="body1"
                    >{`${i + 1}. ${s.title}`}</Link>
                    {/* <ListItemText primary={`${i + 1}. ${s.title}`} /> */}
                  </ListItem>
                ))}
              </List>
            </Grid>
            {/* <Grid item sm={3} style={{ dispay: "hidden" }}></Grid> */}
          </Hidden>
          <Grid item sm={9}>
            <Box style={{ position: "sticky", top: 120 }}>
              {sections.map((s, i) => (
                <Template id={s.id} title={`${i + 1}. ${s.title}`} key={i}>
                  {s.body}
                </Template>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
}

const Template = ({ id, title, children }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Box id={id} className={classes.body}>
      <Typography
        variant="h4"
        paragraph
        style={{ fontWeight: 600, color: theme.palette.primary.light }}
      >
        {title}
      </Typography>
      <Typography style={{ fontFamily: "sans serif" }}>{children}</Typography>
    </Box>
  );
};

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {},
  background: {
    background: `linear-gradient(270deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
    // height: 200,
    paddingTop: 60,
    paddingBottom: 60,
    overflow: "hidden",
    position: "relative",
    scrollMarginTop: 120,
  },
  content: {
    backgroundColor: "white",
    marginTop: 50,
    marginBottom: 50,
    scrollMarginTop: 120,
    scrollBehavior: "smooth",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  sidebar: {
    ineHeight: "1.7em",
    fontWeight: 500,
    "&:hover": { color: theme.palette.secondary.main },
  },
  body: {
    marginBottom: "4em",
    scrollMarginTop: 120,
  },
}));

const sections = [
  {
    id: "terms",
    title: "Terms",
    body: (
      <>
        By accessing this Website, accessible from https://www.cloudboz.com,
        you are agreeing to be bound by these Website Terms and Conditions of
        Use and agree that you are responsible for the agreement with any
        applicable local laws. If you disagree with any of these terms, you are
        prohibited from accessing this site. The materials contained in this
        Website are protected by copyright and trade mark law.
      </>
    ),
  },
  {
    id: "license",
    title: "Use License",
    body: (
      <>
        Permission is granted to temporarily download one copy of the materials
        on CloudBoz's Website for personal, non-commercial transitory viewing
        only. This is the grant of a license, not a transfer of title, and under
        this license you may not:
        <ul>
          <li>modify or copy the materials;</li>
          <li>
            use the materials for any commercial purpose or for any public
            display;
          </li>
          <li>
            attempt to reverse engineer any software contained on CloudBoz's
            Website;
          </li>
          <li>
            remove any copyright or other proprietary notations from the
            materials; or
          </li>
          <li>
            transferring the materials to another person or "mirror" the
            materials on any other server.
          </li>
        </ul>
        Permission is granted to temporarily download one copy of the materials
        on CloudBoz's Website for personal, non-commercial transitory viewing
        only. This is the grant of a license, not a transfer of title, and under
        this license you may not:
      </>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    body: (
      <>
        All the materials on CloudBoz’s Website are provided "as is". CloudBoz 
        makes no warranties, may it be expressed or implied, therefore
        negates all other warranties. Furthermore, CloudBoz does not make any
        representations concerning the accuracy or reliability of the use of the
        materials on its Website or otherwise relating to such materials or any
        sites linked to this Website.
      </>
    ),
  },
  {
    id: "limitations",
    title: "Limitations",
    body: (
      <>
        CloudBoz or its suppliers will not be hold accountable for any
        damages that will arise with the use or inability to use the materials
        on CloudBoz’s Website, even if CloudBoz or an authorize
        representative of this Website has been notified, orally or written, of
        the possibility of such damage. Some jurisdiction does not allow
        limitations on implied warranties or limitations of liability for
        incidental damages, these limitations may not apply to you.
      </>
    ),
  },
  {
    id: "revisions",
    title: "Revisions and Errata",
    body: (
      <>
        The materials appearing on CloudBoz’s Website may include technical,
        typographical, or photographic errors. CloudBoz will not promise that
        any of the materials in this Website are accurate, complete, or current.
        CloudBoz may change the materials contained on its Website at any
        time without notice. CloudBoz does not make any commitment to update
        the materials.
      </>
    ),
  },
  {
    id: "links",
    title: "Links",
    body: (
      <>
        CloudBoz has not reviewed all of the sites linked to its Website and
        is not responsible for the contents of any such linked site. The
        presence of any link does not imply endorsement by CloudBoz of the
        site. The use of any linked website is at the user’s own risk.
      </>
    ),
  },
  {
    id: "modifications",
    title: "Site Terms of Use Modifications",
    body: (
      <>
        CloudBoz may revise these Terms of Use for its Website at any time
        without prior notice. By using this Website, you are agreeing to be
        bound by the current version of these Terms and Conditions of Use.
      </>
    ),
  },
  {
    id: "privacy",
    title: "Your Privacy",
    body: <>Please read our Privacy Policy.</>,
  },
  {
    id: "law",
    title: "Governing Law",
    body: (
      <>
        Any claim related to CloudBoz's Website shall be governed by the laws
        of id without regards to its conflict of law provisions.
      </>
    ),
  },
];
