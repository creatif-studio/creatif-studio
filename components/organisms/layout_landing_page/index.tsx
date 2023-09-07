import FooterSection from "@/components/molecules/footer";
import Navbar from "@/components/pages/landing-page/navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const LayoutLandingPage = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <FooterSection />
    </>
  );
};

export default LayoutLandingPage;
