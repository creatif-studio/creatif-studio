import {
  Creatif,
  CreatifDark,
  CreatifWhite,
  HumburgerMenu,
} from "@/assets/icons";
import { BaseButton } from "@/components/atoms";
import React from "react";
import HeroSection from "./hero";
import ServiceSection from "./service";
import WorkSection from "./work";
import TestimoniSection from "./testimoni";
import FooterSection from "./footer";
import { Brand } from "@/components/atoms/brand";
import OurTeamSection from "./ourTeam";
import Navbar from "./navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <WorkSection />
      <TestimoniSection />
      <OurTeamSection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
