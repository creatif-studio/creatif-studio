import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  CircularProgress,
  makeStyles,
  useTheme,
} from "@material-ui/core";

import ListHeader from "components/ListHeader";
import ListItem from "components/ListItem";

export default function ListServer({ servers, getStatus }) {
  const classes = useStyles();
  const theme = useTheme();
  const [stats, setStatus] = useState([]);

  const hosts = servers.map((s) => s.ip);

  useEffect(() => {
    const timer = setInterval(async () => {
      const { data } = await getStatus({ hosts });
      setStatus(data.data);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const color = {
    failed: theme.palette.common.red,
    loading: theme.palette.divider,
    healthy: theme.palette.common.green,
  };

  const headers = ["NAME", "IP", "WEB SERVER", "APPS"];
  const width = ["35%", "25%", "30%", "10%"];

  return (
    <Container disableGutters className={classes.center}>
      <ListHeader items={headers} width={width} />
      {servers?.map(({ id, name, ip, webServer, apps, status }, i) => (
        <ListItem
          id={id}
          status={
            status == "loading" || !stats.length
              ? color.loading
              : stats[i].isAlive
              ? color.healthy
              : color.failed
          }
          path="/servers"
          renderItem={
            <>
              <Box
                style={{
                  width: width[0],
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <Typography>{name}</Typography>
                {status == "loading" && <CircularProgress size="1rem" />}
              </Box>
              <Box style={{ width: width[1] }}>
                <Typography>{ip.replace("\n", "; ")}</Typography>
              </Box>
              <Box
                style={{
                  width: width[2],
                  display: "flex",
                  gap: 5,
                  alignItems: "center",
                }}
              >
                {webServer && <img src={`/${webServer}.svg`} height={24} />}
                <Typography>{webServer || "-"}</Typography>
              </Box>
              <Box style={{ width: width[3] }}>
                <Typography>{apps}</Typography>
              </Box>
            </>
          }
          key={i}
        />
      ))}
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  center: {
    justifyItems: "center",
  },
  empty: {},
  btn: {
    marginTop: theme.spacing(1),
    fontSize: theme.typography.pxToRem(16),
    paddingInline: theme.spacing(3),
    paddingBlock: theme.spacing(1),
  },
}));
