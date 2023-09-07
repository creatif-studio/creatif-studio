import { BaseButton } from "@/components/atoms";
import Image from "next/image";
import React from "react";
import work1 from "@/assets/images/work1.png";
import work2 from "@/assets/images/work-2.png";
import work3 from "@/assets/images/work-3.png";
import work4 from "@/assets/images/work-4.png";
import Link from "next/link";

const WorkSection = () => {
  return (
    <section
      id="portfolio"
      className="flex flex-col items-center w-full lg:px-24"
    >
      <div className="flex flex-col w-full gap-4 px-6 py-13 md:flex-row md:justify-between">
        <h1 className="text-4xl font-semibold capitalize md:text-[42px]">
          {"Awesome project we've ever worked on"}
        </h1>
        <div className="space-y-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <Link href={"/portofolio"}>
            <BaseButton variant="primary" label="See All Project" />
          </Link>
        </div>
      </div>
      <div className="space-x-3 carousel carousel-center">
        <div className="relative ml-6 carousel-item card-image lg:ml-0">
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
        <div className="relative carousel-item card-image">
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
        <div className="relative carousel-item card-image">
          <Image
            width={274}
            height={389}
            src={work3}
            className="rounded-box"
            alt="image"
          />
          <div className="p-3 text-center overlay">
            <p className="text-3xl font-semibold">Technical Writing</p>
            <p>Lorem ipsum dolor sit amet,</p>
          </div>
        </div>
        <div className="relative pr-5 carousel-item card-image lg:pr-0">
          <Image
            width={274}
            height={389}
            src={work4}
            className="rounded-box"
            alt="image"
          />
          <div className="p-3 text-center overlay lg:p-0">
            <p className="text-3xl font-semibold">Automation Test</p>
            <p>Lorem ipsum dolor sit amet,</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
