import { Container } from "components/atoms";
import React from "react";

const Solution = () => {
  return (
    <div>
      <Container className="mx-auto py-16 px-6 pb-24 xl:pb-41 xl:px-0 xl:py-33">
        <h4 className="font-semibold font-display">Solution</h4>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 xl:col-span-6 pb-8 mb-8 border-b border-black">
            <h3 className="font-semibold font-display text-2xl xl:text-3xl leading-normal mt-4">
              Consistently deploy across multiple clouds with Terraform
            </h3>
          </div>
          <div className="col-span-12 xl:col-span-5 xl:col-start-8">
            <p className="text-neutral-600 leading-relaxed">
              Provisioning infrastructure across multiple clouds increases fault
              tolerance, allowing for more graceful recovery from cloud provider
              outages. However, multi-cloud deployments add complexity because
              each provider has its own interfaces, tools, and workflows.
              Terraform lets you use the same workflow to manage multiple
              providers and handle cross-cloud dependencies. This simplifies
              management and orchestration for large-scale, multi-cloud
              infrastructures.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Solution;
