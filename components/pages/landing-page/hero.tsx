import { BaseButton } from "@/components/atoms";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import unio from "@/assets/images/Union.png";
import { clsx } from "@/libs";

type Props = {
  page: string;
  title: string;
  subTitle?: string;
  description?: string;
  buttonLabel?: string;
};

const HeroSection = ({
  page,
  title,
  subTitle,
  description,
  buttonLabel,
}: Props) => {
  return (
    <div
      id="hero"
      className={clsx(
        // page === "home" ? "min-h-screen" : "min-h-[80%]",
        "hero bg-[#0D0E13] min-h-screen text-white overflow-hidden"
      )}
    >
      <div>
        <Image
          src={unio}
          alt="subheader"
          layout="fill"
          objectFit="cover"
          style={{ opacity: 0.1 }}
        />
      </div>

      <div className="mt-10 text-center hero-content">
        <div className="max-w-md mx-auto md:max-w-full">
          <h1 className="text-5xl font-semibold md:text-[90px] lg:text-[128px]">
            {title}
          </h1>
          <h2 className="text-3xl font-medium capitalize max-w-xs mx-auto md:text-[32px] md:max-w-full">
            {subTitle}
          </h2>
          <p className="max-w-xs py-6 mx-auto md:max-w-4xl">{description}</p>
          {buttonLabel && (
            <Link href={"/portofolio"}>
              <BaseButton
                variant="secondary"
                label={buttonLabel}
                className="font-semibold capitalize"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
