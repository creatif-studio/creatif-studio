import { DotLoader, BeatLoader } from "react-spinners";
import { css } from "@emotion/react";
import { useTheme } from "@material-ui/styles";
import { Box } from "@material-ui/core";

const override = css`
  display: block;
  margin: 0 auto;
`;

export function Loader() {
  const theme = useTheme();
  return (
    <Box
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <DotLoader
        color={theme.palette.secondary.main}
        loading={true}
        css={override}
        size={100}
      />
    </Box>
  );
}

export function FullLoader() {
  const theme = useTheme();
  return (
    <Box
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "white",
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <DotLoader
        color={theme.palette.secondary.main}
        loading={true}
        css={override}
        size={100}
      />
    </Box>
  );
}

export function ButtonLoader() {
  const theme = useTheme();
  return (
    <BeatLoader
      color={theme.palette.common.white}
      loading={true}
      css={override}
      size={12}
    />
  );
}
