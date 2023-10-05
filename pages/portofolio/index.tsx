import HeroSection from "@/components/pages/landing-page/hero";
import Navbar from "@/components/pages/landing-page/navbar";
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
// import bookedmd from "@/assets/images/portfolios/bookedmd.png";
import Image from "next/image";

const Project = [
  {
    name: "DeployPRO",
    description: "Servers & Apps Management",
    image: deploypro,
  },
  {
    name: "Clevis",
    description: "Laundry & Car Wash",
    image: clevis,
  },
  {
    name: "Practiz",
    description: "Online Learning Platform",
    image: practiz,
  },
  {
    name: "Activitylist",
    description: "Event Sharing Platform",
    image: activitylist,
  },
  {
    name: "AppSeed Docs",
    description: "Technical Documentation",
    image: appseed,
  },
  {
    name: "Bitzaro",
    description: "Payment Gateway for Web3",
    image: bitzaro,
  },
  {
    name: "CMS Manajer",
    description: "Heroku Replacement",
    image: cmsmanajer,
  },
  {
    name: "IDrive E2",
    description: "S3 Compatible Storage",
    image: idrive,
  },
  {
    name: "Muunship",
    description: "Trading Platform for Crypto",
    image: muunship,
  },
  {
    name: "cQuant.io",
    description: "Ansible Script for Deployment",
    image: cquant,
  },  
  {
    name: "Kelsiem",
    description: "Terraform for AWS Management",
    image: kelsiem,
  },
  // {
  //   name: "BookedMD",
  //   description: "Image Generator and Twitter Bot",
  //   image: bookedmd,
  // }
];

const Portofolio = () => {
  return (
    <div>
      <Navbar />
      <HeroSection page="portofolio" title="Our Portofolio" />
      <section className="grid w-full grid-cols-1 gap-4 px-8 py-20 bg-white place-items-center md:grid-cols-4 lg:px-24">
        {Project.map((item) => (
          <div
            key={item.name}
            className="flex items-start w-fit justify-items-center card-image"
          >
            <div className="relative">
              <Image
                // width={174}
                // height={289}
                src={item.image}
                className="rounded-box"
                alt="image"
              />
              <div className="overlay-s">
                <p className="text-3xl font-semibold">{item.name}</p>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Portofolio;
