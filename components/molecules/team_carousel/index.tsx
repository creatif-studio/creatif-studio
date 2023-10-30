import { Github, Linkendin, Twitter } from "@/assets/icons";
import Image from "next/image";
import React from "react";

type Props = {
  data: any;
};

const TeamCarousel = ({ data }: Props) => {
  return (
    <div className="carousels">
      <div className="carousels-slide">
        {data.map((item: any, index: any) => (
          <div key={index} className="item relative ml-6 card-image lg:ml-0">
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
      </div>
      <div className="carousels-slide">
        {data.map((item: any, index: any) => (
          <div key={index} className="item relative ml-6 card-image lg:ml-0">
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
      </div>
    </div>
  );
};

export default TeamCarousel;
