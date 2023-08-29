import { Container } from "components/atoms";
import { UseCaseContent } from "components/molecules";
import React from "react";

const UseCases = () => {
  return (
    <div className="cursor-default">
      <Container className="mx-auto pt-10 md:pt-20 pb-10 md:pb-20 md:px-10 xl:px-0">
        <h2 className="mx-auto max-w-md md:max-w-none text-3xl md:text-4xl font-semibold font-display text-center mb-14">
          Common use cases for Creatif Studio
        </h2>
        <UseCaseContent />
      </Container>
    </div>
  );
};

export default UseCases;
