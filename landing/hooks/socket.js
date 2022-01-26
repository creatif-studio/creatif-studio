import { useState, useEffect } from "react";
import io from "socket.io-client";

export default function useSocket(url = process.env.NEXT_PUBLIC_BASE_URL) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketIo = io(url, { transports: ["websocket"] });

    setSocket(socketIo);

    function cleanup() {
      socketIo.disconnect();
    }
    return cleanup;

    // should only run once and not on every re-render,
    // so pass an empty array
  }, []);

  return socket;
}
