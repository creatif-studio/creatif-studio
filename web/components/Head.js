import React from "react";
import { Head } from "next/document";

const brand = {
  name: "CloudBoz",
  desc: "A simple control panel for managing cloud server",
  prefix: "cloudboz",
  footerText: "A simple control panel for managing cloud server",
  logoText: "CloudBoz",
  projectName: "CloudBoz",
  url: "cloudboz.com",
  img: "/src/public/vercel.png",
};

const HeadComponent = () => (
  <Head>
    <meta charSet="utf-8" />
    {/* Use minimum-scale=1 to enable GPU rasterization */}
    <meta name="description" content={brand.desc} />
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
    />

    {/* PWA primary color */}
    <meta name="theme-color" content="#130F40" />
  </Head>
);
