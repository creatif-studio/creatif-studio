import { Button, Container } from "components/atoms";
import React from "react";

const ReadyGetStarted = () => {
  return (
    <div className="px-6 xl:px-0">
      <Container className="mx-auto grid grid-cols-12 xl:gap-8 rounded-md bg-primary-500 overflow-hidden relative z-0 p-8 xl:p-0">
        <h2 className="col-span-12 xl:col-span-5 mb-4 font-semibold font-display text-2xl xl:text-3.5xl text-white xl:py-22 xl:pl-16 xl:pr-8">
          Ready to get started?
        </h2>
        <div className="col-span-12 xl:col-span-5 xl:py-22">
          <p className="text-white text-xl mb-8">
            Automate provisioning for multi-cloud deployment
          </p>
          <Button
            neutral
            className="px-5 py-3 bg-white hover:bg-gray-200 transition-colors ease-in text-sm font-medium text-black"
          >
            Try Terraform Cloud for free
          </Button>
        </div>
        <img
          src="/images/usecase-callout-pattern.svg"
          alt="usecase callout pattern"
          className="hidden xl:block col-span-2 object-cover object-right absolute -bottom-8 right-0"
        />
      </Container>
    </div>
  );
};

export default ReadyGetStarted;
