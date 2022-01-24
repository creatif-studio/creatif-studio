import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { Box, Button } from "@material-ui/core";

import { Stepper, Step } from "components/Stepper";
import { Loader } from "components/Loader";

import useSocket from "hooks/socket";
import { useRouter } from "next/router";
import useNotif from "hooks/notif";

export default function Progress({ steps, path, id, message = {} }) {
  // const [part, setPart] = useState(0);
  // const [progress, setProgress] = useState(0);
  const [state, setState] = useState({
    part: 0,
    progress: 0,
  });

  const { part, progress } = state;

  const last = steps.length - 1;

  const socket = useSocket();
  const router = useRouter();
  const notif = useNotif();

  useEffect(() => {
    if (socket) {
      socket.on("logs" + id, (data) => {
        setState(({ progress, part }) => {
          let newState = {
            progress,
            part,
          };
          if (progress == steps[part].parts) {
            newState.progress = 1;
            newState.part = part + 1;
          } else {
            newState.progress = progress + 1;
          }
          return newState;
        });
      });

      socket.on("done" + id, () => {
        setState({ ...state, part: last });
        notif.success(message.success);
        router.replace("/" + path);
      });

      // TODO: errpr handling
      socket.on("error" + id, (data) => {
        notif.error(message.error + data);
        router.replace("/" + path);
      });
    }
  }, [socket]);

  return (
    <Box
      style={{ display: "grid", gridTemplateRows: "auto 1fr", height: "100%" }}
    >
      <Box style={{ margin: "0 75px" }}>
        <Stepper>
          {steps.map((step, i) => (
            <Step
              key={i}
              label={step.name}
              parts={step.parts}
              active={part == i}
              done={part > i || part == last}
              progress={progress}
              last={i == last}
              i={i}
            />
          ))}
        </Stepper>
      </Box>
      <Box style={{ alignSelf: "center" }}>
        <Loader />
        <Typography
          align="center"
          style={{ marginTop: 30 }}
          variant="subtitle2"
        >
          Please wait this may take a few minutes
        </Typography>
      </Box>
    </Box>
  );
}
