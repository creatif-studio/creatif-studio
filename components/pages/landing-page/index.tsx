import React from "react";
import HeroSection from "./hero";
import ServiceSection from "./service";
import WorkSection from "./work";
import TestimoniSection from "./testimoni";
import OurTeamSection from "./ourTeam";

const LandingPage = () => {
  return (
    <div>
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
    </div>
  );
};

export default LandingPage;
