import { Button, Card, Container } from "components/atoms";
import { OpenSourceCard, TerraformCloudCard } from "components/molecules";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="pt-32 pb-28 mx-40 bg-hero-pattern bg-no-repeat bg-right-top">
      <Container className="mx-auto flex gap-8">
        <div className="flex-shrink-0 max-w-lg ">
          <h1 className="font-display text-5xl font-semibold leading-tight mb-2">
            Automate Infrastructure on Any Cloud
          </h1>
          <p className="text-sm text-neutral-500">
            Provision, change, and version resources on any environment.
          </p>
          <Link href="/">
            <a className="text-sm font-medium flex items-center gap-3 group my-8">
              View tutorials
              <BsArrowRight
                size={18}
                className="group-hover:animate-arrow-right"
              />
            </a>
          </Link>
          <Link href="/">
            <a className="text-sm font-medium flex items-center gap-3 group my-8">
              View documentation
              <BsArrowRight
                size={18}
                className="group-hover:animate-arrow-right"
              />
            </a>
          </Link>
        </div>
        <div className="grid grid-flow-col gap-10 flex-grow mr-10 h-86">
          <OpenSourceCard />
          <TerraformCloudCard />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
