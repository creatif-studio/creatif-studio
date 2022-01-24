import { Box, makeStyles, withStyles } from "@material-ui/core";
import {
  LinearProgress as MuiLinearProgress,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Done } from "@material-ui/icons";

export function Stepper({ children }) {
  const classes = useStyles({ val: children.length });
  return <Box className={classes.wrapper}>{children}</Box>;
}

export function Step({
  active = false,
  done = false,
  label,
  parts,
  progress,
  last = false,
  i,
}) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  // TODO: smooth loading
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setValue((value) => {
  //       const diff = Math.random() * 1;
  //       return Math.min(value + diff, 100);
  //     });
  //   }, 500);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  // useEffect(() => {
  //   setValue((value) => {
  //     return Math.max(value, (progress * 100) / parts);
  //   });
  //   console.log(value);
  // }, [progress]);

  // useEffect(() => {
  //   setValue(0);
  // }, [parts]);

  return (
    <Box className={classes.stepWrapper}>
      <Box style={{ minWidth: 100 }}>
        <Box
          className={clsx(classes.circle, (active || done) && classes.active)}
        >
          {done ? (
            <Done style={{ margin: "auto", fontSize: "1.5em" }} />
          ) : (
            <Typography
              style={{ fontWeight: 400 }}
              align="center"
              variant="subtitle2"
            >
              {i + 1}
            </Typography>
          )}
        </Box>
        <Typography align="center" variant="subtitle2">
          {label}
        </Typography>
      </Box>

      {!last && (
        <Box className={classes.progress}>
          <LinearProgress
            variant="determinate"
            value={done ? 100 : active ? (progress * 100) / parts : 0}
            style={{ position: "absolute", top: 13 }}
          />
        </Box>
      )}
    </Box>
  );
}

const LinearProgress = withStyles((theme) => ({
  root: {
    height: 4,
    width: "100%",
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.divider,
  },
  bar: {
    borderRadius: 5,
    backgroundColor: theme.palette.secondary.main,
  },
}))(MuiLinearProgress);

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "grid",
    gap: 5,
    gridTemplateColumns: (props) =>
      `repeat(${props.val - 1}, auto) min-content`,
    // gridAutoColumns: "auto",
    // justifyContent: "space-between",
    // justifyItems: "stretch",
  },
  stepWrapper: {
    display: "flex",
    justifyItems: "center",
    justifyContent: "center",
    gap: 5,
    // margin: "auto",
    // flexGrow: 1,
  },
  circle: {
    height: 30,
    width: 30,
    borderRadius: 30,
    margin: "auto",
    backgroundColor: theme.palette.divider,
    display: "grid",
    alignItems: "center",
    marginBottom: 5,
  },
  active: {
    backgroundColor: theme.palette.secondary.main,
  },
  progress: {
    width: "100%",
    position: "relative",
  },
}));
