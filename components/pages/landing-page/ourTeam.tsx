import Image from "next/image";
import React from "react";
import team1 from "@/assets/images/team1.png";
import team2 from "@/assets/images/team2.png";
import team3 from "@/assets/images/team3.png";
import team4 from "@/assets/images/team4.png";
import { Github, Linkendin, Twitter } from "@/assets/icons";

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
  return (
    <section
      id="teams"
      className="flex flex-col items-center gap-12 px-4 overflow-x-hidden py-13 lg:px-24"
    >
      <div className="">
        <h1 className="text-[42px] font-semibold text-center">Our best team</h1>
      </div>
      <div className="flex items-center gap-3 px-12 carousel carousel-center lg:px-0">
        {dataTeam.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center gap-4 carousel-item"
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
      </div>
    </section>
  );
};

export default OurTeamSection;
