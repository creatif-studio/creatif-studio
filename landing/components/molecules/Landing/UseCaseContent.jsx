import assets from "assets";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { USE_CASE_CONTENT } from "utils/constants";
import UseCaseCard from "./UseCaseCard";

const UseCaseContent = () => {
  return (
    <ul className="grid grid-cols-4 gap-8">
      {USE_CASE_CONTENT.map((content) => (
        <UseCaseCard key={content.id} href={content.href}>
          <div>
            <h4 className="font-semibold font-display mb-3">
              {content.heading}
            </h4>
            <p className="text-sm text-neutral-500 leading-loose">
              {content.subHeading}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {content.icons.includes("TERRAFORM") && (
                <Image src={assets.icons.TERRAFORM} width={32} height={32} />
              )}
              {content.icons.includes("CONSUL") && (
                <Image src={assets.icons.CONSUL} width={32} height={32} />
              )}
              {content.icons.includes("PACKER") && (
                <Image src={assets.icons.PACKER} width={32} height={32} />
              )}
              {content.icons.includes("TERRAFORM_SECRETS") && (
                <Image
                  src={assets.icons.TERRAFORM_SECRETS}
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
