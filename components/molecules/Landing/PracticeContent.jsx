import assets from "assets";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { PRACTICE_CONTENT } from "utils/constants";
import PracticeCard from "./PracticeCard";

const PracticeContent = () => {
  return (
    <ul className="flex pb-1 px-4 md:px-0 md:pb-0 md:grid md:grid-cols-3 gap-8 overflow-auto md:overflow-visible h-96 md:h-auto">
      {PRACTICE_CONTENT.map((content) => (
        <PracticeCard key={content.id} href={content.href}>
          <div>
            <p className="text-xxs tracking-widest uppercase text-neutral-300 mb-5">
              Tutorial
            </p>
            <h4 className="font-semibold font-display mb-3 text-white">
              {content.heading}
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {content.description}
            </p>
          </div>
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {content.icons.includes("TERRAFORM_WHITE") && (
                <Image
                  src={assets.icons.TERRAFORM_WHITE}
                  width={32}
                  height={32}
                />
              )}

              {content.icons.includes("TERRAFORM_SECRETS_WHITE") && (
                <Image
                  src={assets.icons.TERRAFORM_SECRETS_WHITE}
                  width={32}
                  height={32}
                />
              )}
            </div>
            <div>
              <BsArrowRight size={24} className="text-white" />
            </div>
          </div>
        </PracticeCard>
      ))}
    </ul>
  );
};

export default PracticeContent;
