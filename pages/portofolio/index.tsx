import HeroSection from "@/components/pages/landing-page/hero";
import Navbar from "@/components/pages/landing-page/navbar";
import React from "react";
import sampleProject from "@/assets/images/sample-project.png";
import Image from "next/image";

const Project = [
  {
    name: "DeployPRO",
    description: "Servers & Apps Management",
    image: sampleProject,
  },
  {
    name: "Clevis",
    description: "Laundry & Car Wash",
    image: sampleProject,
  },
  {
    name: "Practiz",
    description: "Online Learning Platform",
    image: sampleProject,
  },
  {
    name: "Activitylist",
    description: "Event Sharing Platform",
    image: sampleProject,
  },
  {
    name: "Cigbot",
    description: "Image Generator and Twitter Bot",
    image: sampleProject,
  },
  {
    name: "AppSeed Docs",
    description: "Technical Documentation",
    image: sampleProject,
  },
  {
    name: "Bitzaro",
    description: "Payment Gateway for Web3",
    image: sampleProject,
  },
  {
    name: "Rilis",
    description: "Heroku Replacement",
    image: sampleProject,
  },
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
