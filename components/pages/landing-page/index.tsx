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
      {/* <Navbar /> */}
      <HeroSection
        page="home"
        title="Creatif Studio"
        subTitle="Expertly Crafted Software Solutions"
        description="We specialize in turning your vision into reality. With our team of highly skilled professionals, we are committed to delivering customized, innovative, and top-quality software solutions that exceed your expectations."
        buttonLabel="View Our Work"
      />
      <div className="">
        <ServiceSection />
        <WorkSection />
        <TestimoniSection />
        <OurTeamSection />
      </div>
      {/* <FooterSection /> */}
    </div>
  );
};

export default LandingPage;
