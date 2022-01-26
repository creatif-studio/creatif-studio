import React from "react";
import getCookie from "utils/getCookie";
import { API, setToken } from "utils/api";
import { useUser } from "context/auth";

import Router, { useRouter } from "next/router";
import { FullLoader } from "./Loader";

export default function withAuth(Component) {
  const Auth = (props) => {
    // Login data added to props via redux-store (or use react context for example)
    const [initializing, setInitializing] = React.useState(false);
    const { setUser, isLoggedIn, setIsLoggedIn } = useUser();
    const router = useRouter();

    React.useEffect(async () => {
      if (initializing) {
        try {
          const token = getCookie({}, "token");
          setToken(token);
          const {
            data: { data: user },
          } = await API.get("/profile");
          setUser(user);
          setIsLoggedIn(true);
          if (!user.verified) {
            Router.replace("/verify");
          }
          setInitializing(false);
        } catch (error) {
          Router.replace("/login");
        }
      }
    }, [initializing]);

    React.useEffect(() => {
      if (!isLoggedIn) {
        setInitializing(true);
      }
    }, []);

    // If user is not logged in, return login component
    if (!isLoggedIn) {
      return <FullLoader loading />;
    }

    // If user is logged in, return original component
    return <Component {...props} />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
}
