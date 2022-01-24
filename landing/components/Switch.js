import { withStyles } from "@material-ui/core/styles";
import { Switch } from "@material-ui/core";

const pxToRem = (px, oneRemPx = 17) => `${px / oneRemPx}rem`;

const borderWidth = 1;
const width = pxToRem(46);
const height = pxToRem(28);
const size = pxToRem(16);
const gap = (28 - 16) / 2;

const StyledSwitch = withStyles((theme) => ({
  root: {
    width,
    height,
    padding: 0,
    margin: theme.spacing(1),
    overflow: "unset",
  },
  switchBase: {
    padding: pxToRem(gap),
    "&$checked": {
      color: "#fff",
      transform: `translateX(calc(${width} - ${size} - ${pxToRem(2 * gap)}))`,
      "& + $track": {
        backgroundColor: theme.palette.secondary.main,
        opacity: 1,
        border: "none",
      },
      "& $thumb": {
        backgroundColor: "#fff",
      },
    },
  },
  track: {
    borderRadius: 40,
    border: `solid ${theme.palette.grey[400]}`,
    borderWidth,
    backgroundColor: "#FDFDFD",
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
    boxSizing: "border-box",
  },
  thumb: {
    boxShadow: "none",
    backgroundColor: theme.palette.grey[400],
    width: size,
    height: size,
  },
  checked: {},
}))((props) => <Switch {...props} />);

export default StyledSwitch;
