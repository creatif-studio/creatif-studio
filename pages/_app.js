import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Creatif Studio</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
