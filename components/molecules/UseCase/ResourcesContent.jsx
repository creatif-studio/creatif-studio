import assets from "assets";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { USECASE_RESOURCES_CONTENT } from "utils/constants";
import UseCaseCard from "./ResourcesCard";

const UseCaseContent = () => {
  return (
    <ul className="flex pb-1 px-4 md:px-0 md:pb-0 md:grid md:grid-cols-3 gap-8 my-4 overflow-auto md:overflow-visible">
      {USECASE_RESOURCES_CONTENT.map((content) => (
        <UseCaseCard key={content.id} href={content.href}>
          <div>
            <h4 className="font-semibold font-display mb-3">
              {content.heading}
            </h4>
            <p className="text-sm text-neutral-500 leading-relaxed">
              {content.description}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {content.icons.includes("CREATIF") && (
                <Image src={assets.icons.CREATIF} width={32} height={32} />
              )}
              {content.icons.includes("CONSUL") && (
                <Image src={assets.icons.CONSUL} width={32} height={32} />
              )}
              {content.icons.includes("PACKER") && (
                <Image src={assets.icons.PACKER} width={32} height={32} />
              )}
              {content.icons.includes("CREATIF_SECRETS") && (
                <Image
                  src={assets.icons.CREATIF_SECRETS}
                  width={32}
                  height={32}
                />
              )}
            </div>
            <div>
              <BsArrowRight size={24} />
            </div>
          </div>
        </UseCaseCard>
      ))}
    </ul>
  );
};

export default UseCaseContent;
