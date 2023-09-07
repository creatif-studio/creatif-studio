import {
  Blockchain,
  Devops,
  MobileDev,
  OtomasiTest,
  TechnicalWriting,
  UiUxDesign,
} from "@/assets/icons";
import React from "react";

const DataService = [
  {
    icon: <UiUxDesign />,
    title: "UI/UX Strategy, Research & Design",
    description:
      "Crafting intuitive, visually stunning interfaces while leveraging in-depth research to create seamless user experiences.",
  },
  {
    icon: <MobileDev />,
    title: "Website & Mobile Development",
    description:
      "Transforming your concepts and ideas into fully functional web and mobile applications that resonate with your audience.",
  },
  {
    icon: <Blockchain />,
    title: "Blockchain/ Web3 Development",
    description:
      "Pioneering the future of decentralized applications and technologies, harnessing the power of blockchain for innovation.",
  },
  {
    icon: <OtomasiTest />,
    title: "Manual & Automation Testing",
    description:
      "Rigorous testing to ensure the products meet the standards of functionality and reliability, combining manual and auto testing.",
  },
  {
    icon: <Devops />,
    title: "DevOps & Cloud Architecture",
    description:
      "Building the backbone of scalable and efficient digital systems through DevOps practices and cloud architecture expertise.",
  },
  {
    icon: <TechnicalWriting />,
    title: "Technical Writing & Documentation",
    description:
      "Creating comprehensive documentation that empowers users to understand and utilize your product to its fullest potential.",
  },
];

const ServiceSection = () => {
  return (
    <section
      id="service"
      className="flex flex-col items-center w-full px-6 lg:px-24 py-13"
    >
      <div className="space-y-3 text-center">
        <h1 className="text-4xl font-semibold md:text-[42px]">
          What we can do for you
        </h1>
        <p>We specialize in turning your visions into reality</p>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 my-12 md:grid-cols-2 ">
        {DataService.map((item) => (
          <div
            key={item.title}
            className="w-full p-8 border border-[#4A5568] hover:bg-[#0D0E13] hover:text-white rounded-3xl flex flex-col gap-4 transition duration-300"
          >
            <div className="flex items-center gap-4">
              <div>{item.icon}</div>
              <h3 className="text-2xl font-semibold md:text-3xl ">
                {item.title}
              </h3>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
