import { useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  CircularProgress,
  makeStyles,
} from "@material-ui/core";
import ListHeader from "components/ListHeader";

import ListItem from "components/ListItem";
import useSocket from "hooks/socket";
import { useUser } from "context/auth";
import useNotif from "hooks/notif";

export default function ListApp({ apps, refetch }) {
  const classes = useStyles();
  const socket = useSocket();
  const notif = useNotif();
  const { user } = useUser();

  useEffect(() => {
    if (socket) {
      socket.on("logs" + user.id, (data) => {
        console.log(data);
      });

      socket.on("done" + user.id, (data) => {
        refetch();
        notif.success(data);
      });

      socket.on("error" + user.id, (data) => {
        refetch();
        notif.error(data);
      });
    }
  }, [socket]);

  const headers = [
    "NAME",
    "DOMAIN",
    "TYPE",
    "SERVER",
    "SYSTEM USER",
    "DATABASES",
  ];
  const width = ["25%", "25%", "10%", "15%", "15%", "10%"];

  return (
    <Container disableGutters className={classes.center}>
      <ListHeader items={headers} width={width} />
      {apps?.map(
        (
          {
            id,
            name,
            domain,
            type,
            server,
            systemUser,
            totalDatabases,
            status,
          },
          i
        ) => (
          <ListItem
            id={id}
            status="white"
            path="/apps"
            disabled={status == "loading"}
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
                  <Typography>{domain}</Typography>
                </Box>
                <Box style={{ width: width[2] }}>
                  <Typography>
                    {type.includes("wp") ? "wordpress" : type}
                  </Typography>
                </Box>
                <Box style={{ width: width[3] }}>
                  <Typography>{server?.name}</Typography>
                </Box>
                <Box style={{ width: width[4] }}>
                  <Typography>{systemUser?.username}</Typography>
                </Box>
                <Box style={{ width: width[5] }}>
                  <Typography>{totalDatabases}</Typography>
                </Box>
              </>
            }
            key={i}
          />
        )
      )}
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
