import { BaseButton } from "@/components/atoms";
import Image from "next/image";
import React from "react";
import activitylist from "@/assets/images/portfolios/activitylist.png";
// import appseed from "@/assets/images/portfolios/appseed.png";
// import bitzaro from "@/assets/images/portfolios/bitzario.png";
import clevis from "@/assets/images/portfolios/celvis.png";
// import cmsmanajer from "@/assets/images/portfolios/cmsmanajer.png";
// import cquant from "@/assets/images/portfolios/cquant.png";
import deploypro from "@/assets/images/portfolios/deploypro.png";
// import idrive from "@/assets/images/portfolios/idrive.png";
// import kelsiem from "@/assets/images/portfolios/kelsiem.png";
// import muunship from "@/assets/images/portfolios/muunship.png";
import practiz from "@/assets/images/portfolios/practiz.png";
// import bookedmd from "@/assets/images/portfolios/bookedmd.png";
import Link from "next/link";

const WorkSection = () => {
  return (
    <section
      id="portfolio"
      className="flex flex-col items-center w-full lg:px-24"
    >
      <div className="space-y-3 text-center">
        <h1 className="text-4xl font-semibold md:text-[42px]">
          Our amazing projects
        </h1>
        <p>
          Our portfolio reflects years of hard work, dedication, and successful collaborations.
        </p>
      </div>

      {/* <div className="flex flex-col w-full gap-4 px-6 lg:px-0 py-13 md:flex-row md:justify-between">
        <h1 className="text-4xl font-semibold capitalize md:text-[42px]">
          {"Our Amazing Project"}
        </h1>
        <div className="space-y-6">
          <p>
            Our portfolio reflects years of hard work, dedication, and successful collaborations.
          </p>
          <Link href={"/portofolio"}>
            <BaseButton variant="primary" label="See All Project" />
          </Link>
        </div>
      </div> */}

      <div className="flex justify-between w-full gap-4 carousel carousel-center my-12">
        <div className="relative ml-6 carousel-item card-image lg:ml-0">
          <Image
            width={274}
            height={389}
            src={deploypro}
            className="rounded-box "
            alt="image"
          />
          <div className="overlay">
            <p className="text-3xl font-semibold">DeployPRO</p>
            <p>Servers & Apps Management</p>
          </div>
        </div>
        <div className="relative carousel-item card-image">
          <Image
            width={274}
            height={389}
            src={clevis}
            className="rounded-box"
            alt="image"
          />
          <div className="overlay">
            <p className="text-3xl font-semibold">Clevis</p>
            <p>Laundry and Car Wash</p>
          </div>
        </div>
        <div className="relative carousel-item card-image">
          <Image
            width={274}
            height={389}
            src={practiz}
            className="rounded-box"
            alt="image"
          />
          <div className="p-3 text-center overlay">
            <p className="text-3xl font-semibold">Practiz</p>
            <p>Online Learning Platform</p>
          </div>
        </div>
        <div className="relative pr-5 carousel-item card-image lg:pr-0">
          <Image
            width={274}
            height={389}
            src={activitylist}
            className="rounded-box"
            alt="image"
          />
          <div className="p-3 text-center overlay lg:p-0">
            <p className="text-3xl font-semibold">Activitylist</p>
            <p>Event Sharing Platform</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
