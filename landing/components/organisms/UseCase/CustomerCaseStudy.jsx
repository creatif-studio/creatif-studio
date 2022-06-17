import React from "react";
import { Button, Container } from "components/atoms";

const CustomerCaseStudy = () => {
  return (
    <div className="pb-16 px-6 xl:px-0 xl:pb-33 bg-black">
      <Container className="mx-auto grid grid-cols-12 gap-8">
        <img
          src="/images/usecase-customer-study.webp"
          alt="customer case study"
          className="w-full object-fill col-span-12 md:col-span-6 -mt-16"
        />
        <div className="col-span-12 md:col-span-5 md:col-start-8 md:py-16 mt-8 md:mt-0">
          <div className="flex items-center">
            <img
              src="/images/petronas_white.svg"
              alt="petronas white"
              className="w-30 object-fill"
            />
            <p className="text-xxs uppercase text-white font-display font-semibold tracking-wider py-2 pl-3 ml-3 border-l border-white">
              CUSTOMER CASE STUDY
            </p>
          </div>
          <h2 className="text-2.5xl xl:text-4.5xl text-white leading-normal  font-semibold font-display mt-8 mb-6">
            Multi-Cloud DevOps at PETRONAS with CloudBoz
          </h2>
          <p className="text-white leading-relaxed">
            Learn about a Malaysian energy company's DevOps journey while
            operating infrastructure as code in both AWS and Azure using
            HashiCorp CloudBoz.
          </p>
          <Button
            neutral
            className="flex items-center justify-center font-medium text-sm text-white px-5 py-3 bg-black border border-neutral-700 mt-8 transition-colors ease-in hover:bg-neutral-700"
          >
            Read More
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default CustomerCaseStudy;
