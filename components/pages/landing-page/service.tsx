import {
  Blockchain,
  ChatGptIcon,
  CodeIcon,
  DatabaseIcon,
  Devops,
  IotIcon,
  MobileDev,
  OtomasiTest,
  TechnicalWriting,
  UiUxDesign,
} from "@/assets/icons";
import React from "react";

const DataService = [
  {
    icon: <UiUxDesign />,
    title: "UI/UX Research & Design",
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
    title: "Blockchain & Web3 Dev",
    description:
      "Pioneering the future of decentralized applications and technologies, harnessing the power of blockchain/web3 for innovation.",
  },
  {
    icon: <OtomasiTest />,
    title: "Manual & Automation Test",
    description:
      "Rigorous testing to ensure the products meet the standards of functionality and reliability, combining manual and auto testing.",
  },
  {
    icon: <Devops />,
    title: "DevOps & Cloud Architect",
    description:
      "Building the backbone of scalable and efficient digital systems through DevOps practices and cloud architecture expertise.",
  },
  {
    icon: <TechnicalWriting />,
    title: "Technical Writing & Docs",
    description:
      "Creating comprehensive documentation that empowers users to understand and utilize your product to its fullest potential.",
  },
  {
    icon: <ChatGptIcon />,
    title: "AI/ChatGPT Development",
    description:
      "Unleash the potential of AI and ChatGPT to create intelligent, interactive solutions that redefine the way you engage with your audience.",
  },
  {
    icon: <IotIcon />,
    title: "IoT/Embedded Development",
    description:
      "Our expertise ensures that your digital systems are scalable, efficient, and ready to meet the challenges of the future.",
  },
  {
    icon: <CodeIcon />,
    title: "Low-Code Development",
    description:
      "Empower us to rapidly bring your ideas to life with minimal coding, reducing development time and costs while maximizing flexibility.",
  },
  {
    icon: <DatabaseIcon />,
    title: "Big Data Development",
    description:
      "Build robust, scalable systems for collecting, processing, and deriving insights from large volumes of data, empowering you to make decisions.",
  },
];

const ServiceSection = () => {
  return (
    <div id="service">
      <section className="flex flex-col items-center w-full px-6 lg:px-24 pt-20 pb-2 ">
        <div className="space-y-3 text-center mt-10">
          <h1 className="text-4xl font-semibold md:text-[42px]">
            What we can do for you
          </h1>
          <p>We specialize in turning your visions into reality</p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 my-12 md:grid-cols-2 ">
          {DataService.map((item) => (
            <div
              key={item.title}
              className="w-full p-4 md:p-8 border border-[#4A5568] hover:bg-[#0D0E13] hover:text-white rounded-3xl flex flex-col gap-4 transition duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="scale-90 md:scale-100">{item.icon}</div>
                <h3 className="text-2xl font-semibold md:text-3xl ">
                  {item.title}
                </h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceSection;
