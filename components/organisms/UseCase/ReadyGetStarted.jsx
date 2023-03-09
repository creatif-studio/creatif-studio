import { Button, Container } from "components/atoms";
import React from "react";

const ReadyGetStarted = () => {
  return (
    <div className="px-6 md:px-10 xl:px-0">
      <Container className="mx-auto grid grid-cols-12 md:gap-8 rounded-md bg-primary-500 overflow-hidden relative z-0 p-8 md:p-0">
        <h2 className="col-span-12 md:col-span-5 mb-4 font-semibold font-display text-2xl md:text-2.5xl xl:text-3.5xl text-white md:py-22 md:pl-16 md:pr-8">
          Ready to get started?
        </h2>
        <div className="col-span-12 md:col-span-5 md:py-22">
          <p className="text-white text-xl mb-8">
            Automate provisioning for multi-cloud deployment
          </p>
          <Button
            neutral
            className="px-5 py-3 bg-white hover:bg-gray-200 transition-colors ease-in text-sm font-medium text-black"
          >
            Try CloudBoz Pro for free
          </Button>
        </div>
        <img
          src="/images/usecase-callout-pattern.svg"
          alt="usecase callout pattern"
          className="hidden md:block col-span-2 object-cover object-right absolute -bottom-8 md:-right-20 xl:right-0"
        />
      </Container>
    </div>
  );
};

export default ReadyGetStarted;
