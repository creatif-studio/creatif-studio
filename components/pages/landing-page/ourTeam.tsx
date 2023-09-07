import Image from "next/image";
import React, { useRef, useState } from "react";
import team1 from "@/assets/images/team1.png";
import team2 from "@/assets/images/team2.png";
import team3 from "@/assets/images/team3.png";
import team4 from "@/assets/images/team4.png";
import { Back, Github, Linkendin, Next, Twitter } from "@/assets/icons";
import Simple from "@/components/molecules/carousel";

const dataTeam = [
  {
    name: "Wade Warren",
    position: "Web Designer",
    profileImage: team1,
  },
  {
    name: "Jacob Jones",
    position: "App Developer",
    profileImage: team2,
  },
  {
    name: "Dianne Russell",
    position: "web developer",
    profileImage: team3,
  },
  {
    name: "Floyd Miles",
    position: "cloud arc",
    profileImage: team4,
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
      className="flex flex-col items-center gap-12 px-4 overflow-x-hidden py-13 md:pb-28 lg:px-24"
    >
      <div>
        <h1 className="text-[42px] font-semibold text-center">Our best team</h1>
      </div>
      <div
        ref={containerRef}
        className="relative flex items-center gap-3 px-12 carousel carousel-center lg:px-0"
      >
        {dataTeam.map((item, index) => (
          <div
            id="container"
            key={item.name}
            className={`flex flex-col items-center gap-4 carousel-item ${
              index === activeIndex ? "active" : ""
            }`}
          >
            <div className="relative ml-6 card-image lg:ml-0">
              <Image
                // width={274}
                // height={389}
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
              <h3 className="text-2xl font-semibold">{item.name}</h3>
              <p>{item.position}</p>
            </div>
          </div>
        ))}
        <button
          onClick={handlePrev}
          className="hidden xl:block absolute top-40 left-5 group  px-4 py-4 bg-black border border-[#0D0E13] rounded-full hover:bg-[#0D0E13] hover:text-white"
        >
          <Back className="stroke-white" />
        </button>
        <button
          onClick={handleNext}
          className="hidden xl:block absolute top-40 right-5 group px-4 py-4 bg-black border border-[#0D0E13] rounded-full hover:bg-[#0D0E13] hover:text-white"
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
