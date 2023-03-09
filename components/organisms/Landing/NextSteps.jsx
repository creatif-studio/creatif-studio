import { Container } from "components/atoms";
import { NextStepsContent } from "components/molecules";
import React from "react";

const NextSteps = () => {
  return (
    <div className="xl:py-20 md:pt-20 my-16 xl:my-10">
      <Container className="mx-auto grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-8 px-5 md:px-10 xl:px-0">
        <div className="col-span-1 cursor-default">
          <h2 className="text-4xl md:text-5xl font-semibold font-display mb-6">
            Next Steps
          </h2>
          <p className="text-neutral-500 mb-6 max-w-[15rem] leading-relaxed">
            CloudBoz Pro provides infrastructure automation as a service, is
            free to get started, and has an in-place upgrade to paid option.
          </p>
        </div>
        <NextStepsContent />
      </Container>
    </div>
  );
};

export default NextSteps;
