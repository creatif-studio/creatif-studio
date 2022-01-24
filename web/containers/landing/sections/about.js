import {
  Container,
  Grid,
  makeStyles,
  Box,
  Typography,
  Hidden,
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  withStyles,
  Link,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function About({ openContactUs }) {
  const classes = useStyles();

  const items = [
    {
      group: "Products",
      children: [
        {
          label: "Features",
          href: "#features",
        },
      ],
    },
    {
      group: "Resources",
      children: [
        {
          label: "Documentation",
          href: "https://docs.cloudboz.com",
        },
      ],
    },
    {
      group: "Company",
      children: [
        {
          label: "Contact us",
          // href: "#features",
          onClick: () => openContactUs(),
        },
      ],
    },
  ];

  return (
    <Container maxWidth={false}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item sm={7} xs={12}>
            <Typography variant="h5" className={classes.bold} paragraph>
              CloudBoz
            </Typography>
            <Typography variant="subtitle1" paragraph>
              CloudBoz is a intuitive control panel fol managing cloud
              servers. You can set up your server even install application like
              LAMP, LEMP, CMS (WordPress, PrestaShop, MediaWiki, Moodle, etc) in
              just one click.
            </Typography>
          </Grid>
          <Grid item sm={5} xs={12}>
            {/* For mobile */}
            <Hidden smUp>
              {items.map(({ group, children }, i) => {
                const child = children.map(({ href, label, onClick }, i) => (
                  <Link
                    href={href}
                    variant="body2"
                    color="inherit"
                    onClick={onClick}
                    key={i}
                    style={{ cursor: "pointer" }}
                  >
                    {label}
                  </Link>
                ));

                return (
                  <AccordionItem title={group} key={i}>
                    {child}
                  </AccordionItem>
                );
              })}
            </Hidden>
            {/* End for mobile */}
            <Hidden xsDown>
              <Grid container className={classes.grid}>
                {items.map(({ group, children }, i) => {
                  const child = children.map(({ href, label, onClick }, i) => (
                    <Link
                      href={href}
                      variant="body2"
                      color="inherit"
                      onClick={onClick}
                      key={i}
                      style={{ cursor: "pointer" }}
                    >
                      {label}
                    </Link>
                  ));

                  return (
                    <Grid item xs key={i}>
                      <Box className={classes.item}>
                        <Typography
                          variant="body1"
                          className={classes.bold}
                          paragraph
                        >
                          {group}
                        </Typography>
                        {child}
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

function AccordionItem({ title, children }) {
  return (
    <Accordion elevation={0}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography style={{ fontWeight: 600 }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}

const useStyles = makeStyles((theme) => ({
  bg: {
    background: `linear-gradient(96.72deg, ${theme.palette.primary.main} 19.52%, ${theme.palette.primary.light} 81.79%);`,
  },
  container: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    color: "black",
    alignItems: "center",
  },
  bold: {
    fontWeight: 600,
  },
  primary: {
    fontSize: 20,
    fontWeight: "medium",
    borderRadius: 50,
    paddingInline: theme.spacing(4),
    paddingBlock: theme.spacing(1.5),
    width: "9rem",
  },
  item: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  grid: {
    justifyContent: "center",
    marginBottom: theme.spacing(4),
  },
}));

const Accordion = withStyles({
  root: {
    padding: 0,
    backgroundColor: "transparent",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    marginBottom: -1,
    padding: 0,
    minHeight: 50,
    "&$expanded": {
      minHeight: 50,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    display: "grid",
    paddingTop: 0,
    paddingBottom: 10,
    rowGap: 10,
  },
}))(MuiAccordionDetails);
