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
    position: "Founder",
    profileImage: sugeng,
    linkendin: "",
    twitter: "",
    github: "",
  },
  {
    name: "Vebiola Vanessa",
    position: "Finance",
    profileImage: vebiola,
    linkendin: "",
    twitter: "",
    github: "",
  },
  {
    name: "Rizky Adil Hakim",
    position: "VPoE",
    profileImage: rizky,
    linkendin: "",
    twitter: "",
    github: "",
  },
  {
    name: "Muhammad Hikaru Fauzi",
    position: "UI/UX Designer",
    profileImage: hikaru,
    linkendin: "",
    twitter: "",
    github: "",
  },
  {
    name: "Bagus Dharma Putra",
    position: "DevOps Engineer",
    profileImage: dharma,
    linkendin: "",
    twitter: "",
    github: "",
  },
  {
    name: "Aulia Romadon Darmayanti",
    position: "Technical Writer",
    profileImage: aulia,
    linkendin: "",
    twitter: "",
    github: "",
  },
  {
    name: "Nur Askiah",
    position: "Full-Stack Developer",
    profileImage: askiah,
    linkendin: "",
    twitter: "",
    github: "",
  },
  {
    name: "Rian Kristian Lauo",
    position: "Full-Stack Developer",
    profileImage: rian,
    linkendin: "https://www.linkedin.com/in/rianlauo/",
    twitter: "",
    github: "https://github.com/rianllauo",
  },
  {
    name: "Dhuta Dhafit Farenza",
    position: "Full-Stack Developer",
    profileImage: dhafit,
    linkendin: "",
    twitter: "",
    github: "",
  },
  {
    name: "Andika Perdana Dirgantara",
    position: "Full-Stack Developer",
    profileImage: andika,
    linkendin: "",
    twitter: "",
    github: "",
  },
  {
    name: "Fauzi Zaki Ma'ruf",
    position: "Full-Stack Developer",
    profileImage: zaki,
    linkendin: "",
    twitter: "",
    github: "",
  },
  {
    name: "Ahmad Sidik Rudini",
    position: "Full-Stack Developer",
    profileImage: sidik,
    linkendin: "",
    twitter: "",
    github: "",
  },
];

const TeamSection = () => {
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

      <TeamCarousel data={dataTeam} />
    </section>
  );
};

export default TeamSection;
