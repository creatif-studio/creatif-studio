import Head from "next/head";
import React from "react";

interface Props {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export const MetaData = ({ title, children, description }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {children}
    </Head>
  );
};
