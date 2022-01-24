import { createMuiTheme } from "@material-ui/core/styles";
import { blue, yellow, common } from "./color";
import poppins from "typeface-poppins";

// const poppins = {
//   fontFamily: "Poppins",
//   fontStyle: "normal",
//   fontDisplay: "swap",
//   fontWeight: 400,
//   src: `
//     url('/src/styles/fonts/Poppins-Regular.ttf')
//   `,
// };

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"],
    color: "#000000",
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
  },
  palette: {
    primary: blue,
    secondary: yellow,
    common,
  },
  props: {
    MuiButton: {
      disableElevation: true,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [poppins],
        boxSizing: "border-box",
      },
    },
    MuiOutlinedInput: {
      root: {
        "&$focused $notchedOutline": {
          borderColor: yellow.main,
        },
        "&:hover $notchedOutline": {
          borderColor: yellow.main,
        },
        "&$disabled": {
          backgroundColor: common.gray,
        },
        // backgroundColor: common.white,
      },
    },
    MuiTabs: {
      root: {
        // marginTop: 5,
        minHeight: "30px",
        maxHeight: "40px",
      },
      flexContainer: {
        alignSelf: "center",
      },
    },
    MuiTab: {
      root: {
        width: "100px",
        minWidth: "100px",
        maxWidth: "120px",
        minHeight: "30px",
        maxHeight: "40px",
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
        fontWeight: 600,
        borderRadius: "5px",
      },
      containedPrimary: {
        color: "black",
        fontWeight: 400,
        backgroundColor: yellow.main,
        "&:hover": {
          backgroundColor: yellow.dark,
        },
      },
      containedSecondary: {
        color: "white",
      },
      containedSizeLarge: {
        padding: "10px 22px",
      },
      outlinedSecondary: {
        color: "white",
        outlineColor: "white",
        borderColor: "white",
        borderWidth: 2,
        "&:hover": {
          borderWidth: 2,
          opacity: 0.7,
          borderColor: "white",
          // color: yellow.dark,
        },
      },
    },
  },
});

export default theme;
