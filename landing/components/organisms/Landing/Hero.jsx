import { Button, Card, Container } from "components/atoms";
import { OpenSourceCard, TerraformCloudCard } from "components/molecules";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="pt-20 px-5 lg:px-0 lg:pt-32 pb-16 lg:pb-28 lg:mx-40 xl:bg-hero-pattern bg-no-repeat bg-right-top cursor-default">
      <Container className="mx-auto flex flex-col xl:px-0 xl:flex-row gap-4 xl:gap-8">
        <div className="flex-shrink-0 max-w-lg">
          <h1 className="font-display text-4xl lg:text-5xl font-semibold leading-tight mb-2">
            Automate Infrastructure on Any Cloud
          </h1>
          <p className="text-sm text-neutral-500">
            Provision, change, and version resources on any environment.
          </p>
          <Link href="/">
            <a className="text-sm font-medium flex items-center gap-3 group my-8 max-w-fit">
              View tutorials
              <BsArrowRight
                size={18}
                className="group-hover:animate-move-right"
              />
            </a>
          </Link>
          <Link href="/">
            <a className="text-sm font-medium flex items-center gap-3 group my-8 max-w-fit">
              View documentation
              <BsArrowRight
                size={18}
                className="group-hover:animate-move-right"
              />
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8 flex-grow xl:h-86">
          <OpenSourceCard />
          <TerraformCloudCard />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
