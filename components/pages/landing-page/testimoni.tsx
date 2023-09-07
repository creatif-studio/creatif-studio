import Image from "next/image";
import React from "react";
import userIcon from "@/assets/images/Ellipse 1.png";
import { Quotes } from "@/assets/icons";
import CarouselTestimoni from "@/components/molecules/testimoni_carousel";

const TestimoniSection = () => {
  return (
    <section
      id="testi"
      className="flex flex-col items-center gap-3 px-6 py-13 lg:px-24 lg:py-20"
    >
      <CarouselTestimoni />
    </section>
  );
};

export default TestimoniSection;
