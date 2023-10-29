import Image from "next/image";
import React from "react";
import userIcon from "@/assets/images/Ellipse 1.png";
import { Quotes } from "@/assets/icons";
import CarouselTestimoni from "@/components/molecules/testimoni_carousel";

const TestimonialSection = () => {
  return (
    <section
      id="testimonials"
      className="flex flex-col items-center gap-3 px-6 pt-30 lg:px-24 "
    >
      <CarouselTestimoni />
    </section>
  );
};

export default TestimonialSection;
