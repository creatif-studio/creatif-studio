import { BaseButton } from "@/components/atoms";
import Image from "next/image";
import React from "react";
import work1 from "@/assets/images/work1.png";
import work2 from "@/assets/images/work-2.png";
import work3 from "@/assets/images/work-3.png";
import work4 from "@/assets/images/work-4.png";

const WorkSection = () => {
  return (
    <section id="portfolio" className="w-full flex flex-col items-center ">
      <div className="flex flex-col gap-4 py-13 px-6 md:flex-row lg:px-20">
        <h1 className="text-4xl font-semibold capitalize md:text-[42px]">
          {"Awesome project we've ever worked on"}
        </h1>
        <div className="space-y-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <BaseButton variant="primary" label="See All Project" />
        </div>
      </div>
      <div className="carousel carousel-center space-x-3 px-12">
        <div className="carousel-item ml-6 relative lg:ml-0">
          <Image
            width={274}
            height={389}
            src={work1}
            className="rounded-box "
            alt="image"
          />
          <div className="overlay">
            <p className="text-3xl font-semibold">Web Design</p>
            <p>Lorem ipsum dolor sit amet,</p>
          </div>
        </div>
        <div className="carousel-item relative">
          <Image
            width={274}
            height={389}
            src={work2}
            className="rounded-box"
            alt="image"
          />
          <div className="overlay">
            <p className="text-3xl font-semibold">Mobile Apps</p>
            <p>Lorem ipsum dolor sit amet,</p>
          </div>
        </div>
        <div className="carousel-item relative">
          <Image
            width={274}
            height={389}
            src={work3}
            className="rounded-box"
            alt="image"
          />
          <div className="overlay p-3 text-center">
            <p className="text-3xl font-semibold">Technical Writing</p>
            <p>Lorem ipsum dolor sit amet,</p>
          </div>
        </div>
        <div className="carousel-item relative pr-5 lg:pr-0">
          <Image
            width={274}
            height={389}
            src={work4}
            className="rounded-box"
            alt="image"
          />
          <div className="overlay p-3 text-center lg:p-0">
            <p className="text-3xl font-semibold">Automation Test</p>
            <p>Lorem ipsum dolor sit amet,</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
