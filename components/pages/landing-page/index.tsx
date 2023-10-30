import React from "react";
import HeroSection from "./hero";
import ServiceSection from "./service";
import PortfolioSection from "./portfolios";
import TestimonialSection from "./testimonials";
import TeamSection from "./teams";

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
        <PortfolioSection />
        <TestimonialSection />
        <TeamSection />
      </div>
    </div>
  );
};

export default LandingPage;
