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
