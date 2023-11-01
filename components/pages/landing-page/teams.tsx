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
import TeamCarousel from "@/components/molecules/team_carousel";

const dataTeam = [
  {
    name: "Sugeng Agung Suganda",
    position: "Chief Executive Officer",
    profileImage: sugeng,
    linkedin: "https://linkedin.com/in/sgnd",
    // twitter: "https://x.com/sgndreal",
    github: "https://github.com/sgnd",
  },
  {
    name: "Vebiola Vanessa",
    position: "Chief Financial Officer",
    profileImage: vebiola,
    linkedin: "https://linkedin.com/in/vebiolavanessa",
    // twitter: "",
    github: "https://github.com/vebiolavanessa",
  },
  {
    name: "Rizky Adil Hakim",
    position: "Chief Technology Officer",
    profileImage: rizky,
    linkedin: "https://linkedin.com/in/rizky-tanjung",
    // twitter: "",
    github: "https://github.com/kimsohyuncans",
  },
  {
    name: "Muhammad Hikaru N.",
    position: "UI/UX Designer",
    profileImage: hikaru,
    linkedin: "https://linkedin.com/in/muhammad-hikaru-a305b7218",
    // twitter: "",
    github: "",
  },
  {
    name: "Bagus Dharma Putra",
    position: "DevOps Engineer",
    profileImage: dharma,
    linkedin: "https://linkedin.com/in/dharma-putra",
    // twitter: "",
    github: "https://github.com/igstbagusdharmaputra",
  },
  {
    name: "Aulia Romadon Darmayanti",
    position: "Technical Writer",
    profileImage: aulia,
    linkedin: "https://linkedin.com/in/auliaromadon",
    // twitter: "",
    github: "https://github.com/auliaromadon",
  },
  {
    name: "Nur Askiah",
    position: "Full-Stack Developer",
    profileImage: askiah,
    linkedin: "https://linkedin.com/in/nuraskiah",
    // twitter: "",
    github: "https://github.com/nuraskiah",
  },
  {
    name: "Rian Kristian Lauo",
    position: "Full-Stack Developer",
    profileImage: rian,
    linkedin: "https://linkedin.com/in/rianlauo/",
    // twitter: "",
    github: "https://github.com/rianllauo",
  },
  {
    name: "Dhuta Dhafit Farenza",
    position: "Full-Stack Developer",
    profileImage: dhafit,
    linkedin: "https://linkedin.com/in/dhafitf/",
    // twitter: "",
    github: "https://github.com/dhafitf",
  },
  {
    name: "Andika Perdana Dirgantara",
    position: "Full-Stack Developer",
    profileImage: andika,
    linkedin:
      "https://linkedin.com/in/andika-perdana-dirgantara-sutikno-4b1786148",
    // twitter: "",
    github: "https://github.com/andikas95-dev",
  },
  {
    name: "Ahmad Sidik Rudini",
    position: "Full-Stack Developer",
    profileImage: sidik,
    linkedin: "https://www.linkedin.com/in/asidikrdn",
    // twitter: "",
    github: "https://github.com/asidikrdn",
  },
];

const TeamSection = () => {
  return (
    <section
      id="teams"
      className="flex flex-col items-center gap-12 overflow-x-hidden pt-24 pb-13 md:pb-28 lg:px-24"
    >
      <div className="space-y-3 text-center mt-10">
      <h1 className="text-4xl font-semibold md:text-[42px]">
          Our best teams
        </h1>
        <p>The people behind our success...</p>
      </div>

      <TeamCarousel data={dataTeam} />
    </section>
  );
};

export default TeamSection;
