import { BaseButton } from "@/components/atoms";
import React from "react";

const HeroSection = () => {
  return (
    <div id="hero" className="hero min-h-screen framer bg-[#0D0E13] text-white">
      <div className="hero-content text-center mt-10">
        <div className="max-w-md mx-auto md:max-w-full">
          <h1 className="text-5xl font-semibold md:text-[90px] lg:text-[128px]">
            Creatif Studio.
          </h1>
          <h2 className="text-3xl font-medium capitalize max-w-xs mx-auto md:text-[32px] md:max-w-full">
            Expertly crafted software solutions
          </h2>
          <p className="py-6 max-w-xs mx-auto md:max-w-4xl">
            We specialize in turning your vision into reality. With our team of
            highly skilled professionals, we are committed to delivering
            customized, innovative, and top-quality software solutions that
            exceed your expectations.
          </p>
          <BaseButton
            variant="secondary"
            label="View our work"
            className="capitalize font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
