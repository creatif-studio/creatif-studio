import React from "react";
import { MetaData } from "@/components/misc";
import LandingPage from "@/components/pages/landing-page";

export default function Landing() {
  return (
    <>
      <MetaData
        title="Creatif Studio - Expertly crafted software solutions"
        description="Specializing in Custom Software Development, UI/UX Design, Web and Mobile Application Development, Blockchain, Testing, DevOps, Technical Writing, AI, IoT, Low-Code, and Big Data Solutions."
      />
      <LandingPage />
    </>
  );
}
