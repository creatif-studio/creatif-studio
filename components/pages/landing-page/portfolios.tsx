import { BaseButton } from "@/components/atoms";
import Image from "next/image";
import React, { useState } from "react";
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

const dataProjects = [
  {
    id: 1,
    name: "DeployPRO",
    description: "Servers & Apps Management",
    image: deploypro,
  },
  {
    id: 2,
    name: "Clevis",
    description: "Laundry and Car Wash",
    image: clevis,
  },
  {
    id: 3,
    name: "Practiz",
    description: "Online Learning Platform",
    image: practiz,
  },
  {
    id: 4,
    name: "Activitylist",
    description: "Event Sharing Platform<",
    image: activitylist,
  },
  {
    id: 5,
    name: "Appseed Docs",
    description: "Technical Documentation",
    image: appseed,
  },
  {
    id: 6,
    name: "Bitzaro",
    description: "Payment Gateway for Web3<",
    image: bitzaro,
  },
  {
    id: 7,
    name: "CMS Manajer",
    description: "Heroku Replacement",
    image: cmsmanajer,
  },
  {
    id: 8,
    name: "cQuant",
    description: "Energy Risk Management",
    image: cquant,
  },
  {
    id: 9,
    name: "IDrive E2",
    description: "S3 Compatible Storage",
    image: idrive,
  },
  {
    id: 10,
    name: "Kelsiem",
    description: "Realtime Security",
    image: kelsiem,
  },
  {
    id: 11,
    name: "Muunship",
    description: "Trading Platform for Crypto",
    image: muunship,
  },
  {
    id: 12,
    name: "BookedMD",
    description: "Doctor Finders",
    image: bookedmd,
  },
];

const PortfolioSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>();

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  return (
    <section
      id="portfolio"
      className="flex flex-col items-center w-full lg:px-24 pt-30 overflow-hidden"
    >
      <div className="space-y-3 text-center px-4">
        <h1 className="text-4xl font-semibold md:text-[42px]">
          Our amazing projects
        </h1>
        <p>
          Our portfolio reflects years of hard work, dedication, and successful
          collaborations.
        </p>
      </div>

      <div className="carousels">
        <div className="carousels-slide">
          {dataProjects.map((item) => (
            <div
              key={item.id}
              className="item relative ml-6 card-image lg:ml-0"
              onClick={() => handleItemClick(item)}
            >
              <Image
                width={274}
                height={389}
                src={item.image}
                className="rounded-box"
                alt="image"
              />
              <div className="overlay">
                <p className="text-3xl font-semibold">{item.name}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="carousels-slide">
          {dataProjects.map((item) => (
            <div
              key={item.id}
              className="item relative ml-6 card-image lg:ml-0"
              onClick={() => handleItemClick(item)}
            >
              <div className="w-[274px]">
                <Image
                  width={274}
                  height={389}
                  src={item.image}
                  className="rounded-box"
                  alt="image"
                />
              </div>
              <div className="overlay">
                <p className="text-3xl font-semibold">{item.name}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && selectedItem && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 z-50 flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          <div className="w-[30%]">
            <Image
              src={selectedItem.image}
              alt={selectedItem.name}
              width={474}
              height={589}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
