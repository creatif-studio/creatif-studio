import { Container } from "components/atoms";
import { PracticeContent } from "components/molecules";
import React from "react";

const Practice = () => {
  return (
    <div className="py-5 xl:py-10 cursor-default">
      <div className="max-w-practice py-16 xl:py-20 bg-black xl:rounded-md mx-auto bg-scroll  bg-practice-pattern bg-no-repeat bg-left xl:bg-pos-pattern bg-size-pattern">
        <Container className="mx-auto ">
          <h2 className="text-3xl xl:text-4xl font-semibold font-display text-center mb-4 text-white">
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
