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
    title: "UI/UX Design",
    description:
      "Crafting intuitive, visually stunning interfaces that enhance user experiences.",
  },
  {
    icon: <MobileDev />,
    title: "Website & Mobile Development",
    description:
      "Transforming your concepts into fully functional web and mobile applications.",
  },
  {
    icon: <Blockchain />,
    title: "Blockchain/Web3 Development",
    description:
      "Pioneering the future of decentralized applications and technologies.",
  },
  {
    icon: <OtomasiTest />,
    title: "Manual & Automation Testing",
    description:
      "Ensuring your products meet the highest standards of functionality and reliability.",
  },
  {
    icon: <Devops />,
    title: "DevOps & Cloud Architecture",
    description:
      "Building the backbone of scalable and efficient digital systems.",
  },
  {
    icon: <TechnicalWriting />,
    title: "Technical Writing & Documentation",
    description:
      "Detailed documentation that helps users understand your product effectively.",
  },
];

const ServiceSection = () => {
  return (
    <section
      id="service"
      className="flex flex-col items-center w-full px-6 py-13"
    >
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-semibold md:text-[42px]">
          What we can do for you
        </h1>
        <p>We specialize in turning your visions into reality.</p>
      </div>

      <div className="w-full grid grid-cols-1 my-12 gap-4 md:grid-cols-2 lg:px-14">
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
