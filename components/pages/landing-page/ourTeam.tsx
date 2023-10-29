import Image from "next/image";
import React, { useRef, useState } from "react";
import sugeng from "@/assets/images/teams/sugeng.png";
import vebiola from "@/assets/images/teams/vebiola.png";
import rizky from "@/assets/images/teams/rizky.png";
import hikaru from "@/assets/images/teams/hikaru.png";
import dharma from "@/assets/images/teams/dharma.png";
import aulia from "@/assets/images/teams/aulia.png";
import askiah from "@/assets/images/teams/askiah.png";
import zaki from "@/assets/images/teams/zaki.png";
import andika from "@/assets/images/teams/andika.png";
import sidik from "@/assets/images/teams/sidik.png";
import dhafit from "@/assets/images/teams/dhafit.png";
import rian from "@/assets/images/teams/rian.png";
import { Back, Github, Linkendin, Next, Twitter } from "@/assets/icons";
import Simple from "@/components/molecules/carousel";

const dataTeam = [
  {
    name: "Sugeng Agung Suganda",
    position: "Founder",
    profileImage: sugeng,
  },
  {
    name: "Vebiola Vanessa",
    position: "Finance",
    profileImage: vebiola,
  },
  {
    name: "Rizky Adil Hakim",
    position: "VPoE",
    profileImage: rizky,
  },
  {
    name: "Muhammad Hikaru Fauzi",
    position: "UI/UX Designer",
    profileImage: hikaru,
  },
  {
    name: "Bagus Dharma Putra",
    position: "DevOps Engineer",
    profileImage: dharma,
  },
  {
    name: "Aulia Romadon Darmayanti",
    position: "Technical Writer",
    profileImage: aulia,
  },
  {
    name: "Nur Askiah",
    position: "Full-Stack Developer",
    profileImage: askiah,
  },
  {
    name: "Rian Kristian Lauo",
    position: "Full-Stack Developer",
    profileImage: rian,
  },
  {
    name: "Dhuta Dhafit Farenza",
    position: "Full-Stack Developer",
    profileImage: dhafit,
  },
  {
    name: "Andika Perdana Dirgantara",
    position: "Full-Stack Developer",
    profileImage: andika,
  },
  {
    name: "Fauzi Zaki Ma'ruf",
    position: "Full-Stack Developer",
    profileImage: zaki,
  },
  {
    name: "Ahmad Sidik Rudini",
    position: "Full-Stack Developer",
    profileImage: sidik,
  },
];

const OurTeamSection = () => {
  // const [activeIndex, setActiveIndex] = useState(0);

  // const handleNext = () => {
  //   setActiveIndex((prevIndex) => (prevIndex + 1) % dataTeam.length);
  // };
  const containerRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index: any) => {
    const item = containerRef.current?.children[index];
    if (item) {
      item.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (activeIndex < dataTeam.length - 1) {
      setActiveIndex(activeIndex + 1);
      goToSlide(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      goToSlide(activeIndex - 1);
    }
  };

  return (
    <section
      id="teams"
      className="flex flex-col items-center gap-12 overflow-x-hidden pt-24 pb-13 md:pb-28 lg:px-24"
    >
      <div>
        <h1 className="text-[42px] font-semibold text-center">
          Our best teams
        </h1>
      </div>
      <div
        ref={containerRef}
        className="relative w-full flex justify-between xl:gap-0 items-center carousel carousel-center lg:px-0"
      >
        {dataTeam.map((item, index) => (
          <div
            key={item.name}
            className={`flex flex-col items-center carousel-item mr-4 last:mr-20 first:ml-6 lg:mr-4 lg:first:ml-0`}
          >
            <div className="relative card-image lg:ml-0 ">
              <Image
                width={274}
                height={389}
                src={item.profileImage}
                // className="rounded-box "
                alt="image"
              />
              <div className="gap-3 overlay-s">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkendin />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter />
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-1xl font-semibold">{item.name}</h4>
              <p>{item.position}</p>
            </div>
          </div>
        ))}
        <button
          onClick={handlePrev}
          className="hidden absolute top-40 left-5 group  px-4 py-4 bg-black border border-[#0D0E13] rounded-full hover:bg-[#0D0E13] hover:text-white"
        >
          <Back className="stroke-white" />
        </button>
        <button
          onClick={handleNext}
          className="hidden  absolute top-40 right-5 group px-4 py-4 bg-black border border-[#0D0E13] rounded-full hover:bg-[#0D0E13] hover:text-white"
        >
          <Next className="stroke-white " />
        </button>
      </div>

      <div className="flex items-center justify-center w-full gap-4 xl:hidden">
        <button
          onClick={handlePrev}
          className="group  px-4 py-4 bg-white border border-[#0D0E13] rounded-full hover:bg-[#0D0E13] hover:text-white"
        >
          <Back className="group-hover:stroke-white stroke-black" />
        </button>
        <button
          onClick={handleNext}
          className="group px-4 py-4 bg-white border border-[#0D0E13] rounded-full hover:bg-[#0D0E13] hover:text-white"
        >
          <Next className="group-hover:stroke-white stroke-black" />
        </button>
      </div>
    </section>
  );
};

export default OurTeamSection;
