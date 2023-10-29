import { BaseButton } from "@/components/atoms";
import Image from "next/image";
import React from "react";
import activitylist from "@/assets/images/portfolios/activitylist.png";
import appseed from "@/assets/images/portfolios/appseed.png";
import bitzaro from "@/assets/images/portfolios/bitzario.png";
import clevis from "@/assets/images/portfolios/celvis.png";
import cmsmanajer from "@/assets/images/portfolios/cmsmanajer.png";
import cquant from "@/assets/images/portfolios/cquant.png";
import deploypro from "@/assets/images/portfolios/deploypro.png";
import idrive from "@/assets/images/portfolios/idrive.png";
import kelsiem from "@/assets/images/portfolios/kelsiem.png";
import muunship from "@/assets/images/portfolios/muunship.png";
import practiz from "@/assets/images/portfolios/practiz.png";
import bookedmd from "@/assets/images/portfolios/booked.png";

const WorkSection = () => {
  return (
    <section
      id="portfolio"
      className="flex flex-col items-center w-full lg:px-24 pt-30"
    >
      <div className="space-y-3 text-center">
        <h1 className="text-4xl font-semibold md:text-[42px]">
          Our amazing projects
        </h1>
        <p>
          Our portfolio reflects years of hard work, dedication, and successful
          collaborations.
        </p>
      </div>

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

        <div className="relative pr-5 carousel-item card-image lg:pr-0">
          <Image
            width={274}
            height={389}
            src={appseed}
            className="rounded-box"
            alt="image"
          />
          <div className="p-3 text-center overlay lg:p-0">
            <p className="text-3xl font-semibold">Appseed Docs</p>
            <p>Technical Documentation</p>
          </div>
        </div>
        <div className="relative pr-5 carousel-item card-image lg:pr-0">
          <Image
            width={274}
            height={389}
            src={bitzaro}
            className="rounded-box"
            alt="image"
          />
          <div className="p-3 text-center overlay lg:p-0">
            <p className="text-3xl font-semibold">Bitzaro</p>
            <p>Payment Gateway for Web3</p>
          </div>
        </div>
        <div className="relative pr-5 carousel-item card-image lg:pr-0">
          <Image
            width={274}
            height={389}
            src={cmsmanajer}
            className="rounded-box"
            alt="image"
          />
          <div className="p-3 text-center overlay lg:p-0">
            <p className="text-3xl font-semibold">CMS Manajer</p>
            <p>Heroku Replacement</p>
          </div>
        </div>
        <div className="relative pr-5 carousel-item card-image lg:pr-0">
          <Image
            width={274}
            height={389}
            src={cquant}
            className="rounded-box"
            alt="image"
          />
          <div className="p-3 text-center overlay lg:p-0">
            <p className="text-3xl font-semibold">cQuant</p>
            <p>Energy Risk Management</p>
          </div>
        </div>
        <div className="relative pr-5 carousel-item card-image lg:pr-0">
          <Image
            width={274}
            height={389}
            src={idrive}
            className="rounded-box"
            alt="image"
          />
          <div className="p-3 text-center overlay lg:p-0">
            <p className="text-3xl font-semibold">IDrive E2</p>
            <p>S3 Compatible Storage</p>
          </div>
        </div>
        <div className="relative pr-5 carousel-item card-image lg:pr-0">
          <Image
            width={274}
            height={389}
            src={kelsiem}
            className="rounded-box"
            alt="image"
          />
          <div className="p-3 text-center overlay lg:p-0">
            <p className="text-3xl font-semibold">Kelsiem</p>
            <p>Realtime Security</p>
          </div>
        </div>
        <div className="relative pr-5 carousel-item card-image lg:pr-0">
          <Image
            width={274}
            height={389}
            src={muunship}
            className="rounded-box"
            alt="image"
          />
          <div className="p-3 text-center overlay lg:p-0">
            <p className="text-3xl font-semibold">Muunship</p>
            <p>Trading Platform for Crypto</p>
          </div>
        </div>
        <div className="relative pr-5 carousel-item card-image lg:pr-0">
          <Image
            width={274}
            height={389}
            src={bookedmd}
            className="rounded-box"
            alt="image"
          />
          <div className="p-3 text-center overlay lg:p-0">
            <p className="text-3xl font-semibold">BookedMD</p>
            <p>Doctor Finders</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
