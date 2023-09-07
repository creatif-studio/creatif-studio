import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import LayoutLandingPage from "@/components/organisms/layout_landing_page";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <LayoutLandingPage>
        <Component {...pageProps} />
      </LayoutLandingPage>
    </>
  );
}

export default MyApp;
