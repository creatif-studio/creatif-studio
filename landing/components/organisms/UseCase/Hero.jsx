import { Container } from "components/atoms";
import React from "react";

const Hero = () => {
  return (
    <div className="max-w-practice mx-auto bg-usecase-hero-gradient py-16 px-6 xl:px-0 md:py-33 relative z-0 rounded-b-md">
      <img
        src="/images/usecase-hero-pattern.svg"
        alt="usecase hero pattern"
        className="hidden xl:block w-2/6 scale-95 absolute -bottom-10 left-0"
      />
      <Container className="mx-auto">
        <div className="mx-auto max-w-fit">
          <p className="text-sm uppercase font-display mb-7 font-medium">
            Use Case
          </p>
          <h1 className="font-display text-3.5xl md:text-4.5xl lg:text-5xl lg:leading-tight font-semibold mb-6 max-w-sm">
            Multi Cloud Deployment
          </h1>
          <p className="text-neutral-600 text-lg max-w-md leading-8">
            Deploy serverless functions with AWS Lambda, manage Microsoft Azure
            Active Directory resources, provision a load balancer in Google
            Cloud, and more.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
