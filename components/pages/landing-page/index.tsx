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

const LandingPage = () => {
  return (
    <div>
      <nav className="absolute text-white w-full top-0 left-0 px-6 py-8 flex items-center justify-between md:px-13 lg:px-30">
        <Brand />
        <button>
          <HumburgerMenu />
        </button>
      </nav>
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
