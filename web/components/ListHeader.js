import { Typography, makeStyles, Box } from "@material-ui/core";

const radius = 15;
const padding = 60;

const useStyles = makeStyles((theme) => ({
  offset: {
    backgroundColor: "rgba(3, 28, 41, 0.03)",
    paddingRight: radius,
    borderRadius: radius,
    marginBottom: 15,
  },
  root: {
    width: "100%",
    paddingLeft: padding,
    paddingRight: padding - radius,
    paddingBlock: 12,
    display: "flex",
    justifyContent: "space-between",
  },
  text: {
    lineHeight: "1em",
    fontWeight: theme.typography.fontWeightSemiBold,
    color: "rgba(3, 28, 41, 0.4)",
  },
}));

export default function ListHeader({ items, width }) {
  const classes = useStyles();

  return (
    <Box className={classes.offset}>
      <Box className={classes.root}>
        {items.map((item, i) => (
          <Box key={i} style={{ width: width[i] }}>
            <Typography variant="body2" className={classes.text}>
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
