import HeroSection from "@/components/pages/landing-page/hero";
import Navbar from "@/components/pages/landing-page/navbar";
import React from "react";
import activitylist from "@/assets/images/projects/activitylist.png";
import appseed from "@/assets/images/projects/appseed.png";
import bitzaro from "@/assets/images/projects/bitzario.png";
import clevis from "@/assets/images/projects/celvis.png";
import cmsmanajer from "@/assets/images/projects/cmsmanajer.png";
import cquant from "@/assets/images/projects/cquant.png";
import deploypro from "@/assets/images/projects/deploypro.png";
import idrive from "@/assets/images/projects/idrive.png";
import kelsiem from "@/assets/images/projects/kelsiem.png";
import muunship from "@/assets/images/projects/muunship.png";
import practiz from "@/assets/images/projects/practiz.png";
import bookedmd from "@/assets/images/projects/booked.png";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Back, Next } from "@/assets/icons";

const Project = [
  {
    name: "DeployPRO",
    description: "Servers & Apps Management",
    image: deploypro,
    url: "",
  },
  {
    name: "Clevis",
    description: "Laundry & Car Wash",
    image: clevis,
    url: "",
  },
  {
    name: "Practiz",
    description: "Online Learning Platform",
    image: practiz,
    url: "",
  },
  {
    name: "Activitylist",
    description: "Event Sharing Platform",
    image: activitylist,
    url: "",
  },
  {
    name: "AppSeed Docs",
    description: "Technical Documentation",
    image: appseed,
    url: "",
  },
  {
    name: "Bitzaro",
    description: "Payment Gateway for Web3",
    image: bitzaro,
    url: "",
  },
  {
    name: "CMS Manajer",
    description: "Heroku Replacement",
    image: cmsmanajer,
    url: "",
  },
  {
    name: "IDrive E2",
    description: "S3 Compatible Storage",
    image: idrive,
    url: "",
  },
  {
    name: "Muunship",
    description: "Trading Platform for Crypto",
    image: muunship,
    url: "",
  },
  {
    name: "cQuant.io",
    description: "Ansible Script for Deployment",
    image: cquant,
    url: "",
  },
  {
    name: "Kelsiem",
    description: "Terraform for AWS Management",
    image: kelsiem,
    url: "",
  },
  {
    name: "BookedMD",
    description: "Image Generator and Twitter Bot",
    image: bookedmd,
    url: "",
  },
];

const Products = () => {
  return (
    <div>
      <Navbar />
      <HeroSection page="projects" title="Our Products" />
      <section className="grid w-full grid-cols-1 gap-4 px-8 py-20 bg-white place-items-center md:grid-cols-2 lg:px-24">
        {Project.map((item) => (
          <div
            key={item.name}
            className="w-full flex items-start justify-items-center card-image cursor-pointer"
          >
            <div className="relative">
              <Image
                // width={174}
                // height={289}
                src={item.image}
                className="h-full rounded-box"
                alt="image"
              />
              <div className="overlay-s">
                <p className="text-3xl font-semibold">{item.name}</p>
                <p>{item.description}</p>
                <Link href={item.url}>
                  <div className="flex items-center gap-2 mt-3 ">
                    <p className="font-medium">See Study Case</p>
                    <ArrowRight />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Products;
