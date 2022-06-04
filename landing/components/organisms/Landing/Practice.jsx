import { Container } from "components/atoms";
import { PracticeContent } from "components/molecules";
import React from "react";

const Practice = () => {
  return (
    <div className="py-10 cursor-default">
      <div className="max-w-practice py-20 bg-black rounded-md mx-auto xl:bg-practice-pattern bg-no-repeat bg-pos-pattern bg-size-pattern">
        <Container className="mx-auto ">
          <h2 className="text-4xl font-semibold font-display text-center mb-4 text-white">
            Terraform in practice
          </h2>
          <p className="text-neutral-300 text-lg text-center mb-10 max-w-lg mx-auto">
            The best way to understand what Terraform can enable for your
            infrastructure is to see it in action
          </p>
          <PracticeContent />
        </Container>
      </div>
    </div>
  );
};

export default Practice;
