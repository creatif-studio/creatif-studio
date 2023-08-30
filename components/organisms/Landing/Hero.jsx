import { Button, Card, Container } from "components/atoms";
import { OpenSourceCard, CreatifCareersCard } from "components/molecules";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="pt-20 px-5 md:px-10 xl:px-0 md:pt-32 pb-16 lg:pb-28 2xl:mx-40 md:bg-hero-pattern bg-no-repeat bg-right-top cursor-default">
      <Container className="mx-auto flex flex-col md:px-0 md:flex-row gap-4 md:gap-20 xl:gap-8">
        <div className="max-w-lg">
          <h1 className="font-display text-4xl lg:text-5xl font-semibold leading-tight mb-2">
            Trusted Partner for Software Solutions
          </h1>
          <p className="text-sm text-neutral-500">
            Concentrate on growing your business, while we take care of your
            technical needs.
          </p>
          <Link href="/">
            <a className="text-sm font-medium flex items-center gap-3 group my-8 max-w-fit">
              View our works
              <BsArrowRight
                size={18}
                className="group-hover:animate-move-right"
              />
            </a>
          </Link>
          <Link href="/">
            <a className="text-sm font-medium flex items-center gap-3 group my-8 max-w-fit">
              View our products
              <BsArrowRight
                size={18}
                className="group-hover:animate-move-right"
              />
            </a>
          </Link>
        </div>
        <div className="flex-shrink-0 grid grid-cols-1 xl:grid-cols-2 gap-4 flex-grow xl:h-86">
          <OpenSourceCard />
          <CreatifCareersCard />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
