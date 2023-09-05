import Image from "next/image";
import React from "react";
import team1 from "@/assets/images/team1.png";
import team2 from "@/assets/images/team2.png";
import team3 from "@/assets/images/team3.png";
import team4 from "@/assets/images/team4.png";

const OurTeamSection = () => {
  return (
    <section className="flex items-center flex-col py-13 px-4 gap-12 overflow-x-hidden">
      <div className="px-6">
        <h1 className="text-[42px] font-semibold">Our best team</h1>
      </div>
      <div className="carousel carousel-center space-x-6 ">
        <div className="carousel-item ml-6 flex flex-col items-center gap-4">
          <Image
            width={274}
            height={389}
            src={team1}
            className="rounded-box "
            alt="image"
          />
          <div className="text-center">
            <h3 className="text-2xl font-semibold">Wade Warren</h3>
            <p>Web Designer</p>
          </div>
        </div>
        <div className="carousel-item flex flex-col items-center gap-4">
          <Image
            width={274}
            height={389}
            src={team2}
            className="rounded-box "
            alt="image"
          />
          <div className="text-center">
            <h3 className="text-2xl font-semibold">Wade Warren</h3>
            <p>Web Designer</p>
          </div>
        </div>
        <div className="carousel-item flex flex-col items-center gap-4">
          <Image
            width={274}
            height={389}
            src={team3}
            className="rounded-box "
            alt="image"
          />
          <div className="text-center">
            <h3 className="text-2xl font-semibold">Wade Warren</h3>
            <p>Web Designer</p>
          </div>
        </div>
        <div className="carousel-item flex flex-col items-center gap-4">
          <Image
            width={274}
            height={389}
            src={team4}
            className="rounded-box "
            alt="image"
          />
          <div className="text-center">
            <h3 className="text-2xl font-semibold">Wade Warren</h3>
            <p>Web Designer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
