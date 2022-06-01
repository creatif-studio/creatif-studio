import React from "react";

const DeliverContent = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="col-span-1">
        <h3 className="font-semibold font-display text-2xl mb-5">Adopt</h3>
        <p className="text-sm text-neutral-600 leading-loose">
          Compose infrastructure as code in a Terraform file using HCL to
          provision resources from any infrastructure provider.
        </p>
      </div>
      <div className="col-span-1">
        <h3 className="font-semibold font-display text-2xl mb-5">Build</h3>
        <p className="text-sm text-neutral-600 leading-loose">
          Infrastructure automation workflow used to compose, collaborate,
          reuse, and provision infrastructure as code across IT operations and
          teams of developers.
        </p>
      </div>
      <div className="col-span-1">
        <h3 className="font-semibold font-display text-2xl mb-5">
          Standardize
        </h3>
        <p className="text-sm text-neutral-600 leading-loose">
          Infrastructure automation workflow featuring security, compliance, and
          cost management capabilities while using access controls, policy
          enforcement, and audit.
        </p>
      </div>
      <div className="col-span-1">
        <h3 className="font-semibold font-display text-2xl mb-5">Innovate</h3>
        <p className="text-sm text-neutral-600 leading-loose">
          Infrastructure automation workflow extending to all teams in the
          organization with self-service infrastructure as code and integrates
          with VCS, ITSM, CI/CD.
        </p>
      </div>
    </div>
  );
};

export default DeliverContent;
