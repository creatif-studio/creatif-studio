import { Container } from "components/atoms";
import { StoriesContent } from "components/molecules";
import React from "react";

const CustomerStories = () => {
  return (
    <div className="py-20 cursor-default">
      <Container className="mx-auto ">
        <h2 className="text-4xl font-semibold font-display mb-4">
          Customer Stories
        </h2>
        <p className="text-neutral-500 mb-10 max-w-lg leading-relaxed">
          Enterprises from around the globe trust HashiCorp. These are some of
          the most innovative stories from our customers about how they are
          using HashiCorp solutions to make the transition to multi-cloud
          infrastructure.
        </p>
        <StoriesContent />
      </Container>
    </div>
  );
};

export default CustomerStories;
