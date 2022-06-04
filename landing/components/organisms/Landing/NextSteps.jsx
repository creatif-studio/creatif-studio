import { Container } from "components/atoms";
import { NextStepsContent } from "components/molecules";
import React from "react";

const NextSteps = () => {
  return (
    <div className="py-20 mt-10">
      <Container className="mx-auto grid grid-cols-3 gap-8">
        <div className="col-span-1 cursor-default">
          <h2 className="text-5xl font-semibold font-display mb-6">
            Next Steps
          </h2>
          <p className="text-neutral-500 mb-6 max-w-[15rem] leading-relaxed">
            Terraform Cloud provides infrastructure automation as a service, is
            free to get started, and has an in-place upgrade to paid option.
          </p>
        </div>
        <NextStepsContent />
      </Container>
    </div>
  );
};

export default NextSteps;
