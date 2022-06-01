import { Button, Card } from "components/atoms";
import React from "react";

const TerraformCloudCard = () => {
  return (
    <Card className="shadow bg-white border-neutral-200 h-full py-10 px-8 max-w-sm cursor-default opacity-0 animate-[move-to-top_0.5s_forwards_1s]">
      <h3 className="font-semibold font-display text-2xl">Terraform Cloud</h3>
      <h4 className="text-sm font-semibold font-display my-3">
        Managed Terraform
      </h4>
      <Button className="mt-5" mode="primary" buttonSize="md">
        Try Terraform Cloud
      </Button>
      <p className="text-sm text-neutral-500 mt-8 leading-relaxed">
        Terraform Cloud enables infrastructure automation for provisioning,
        compliance, and management of any cloud, datacenter, and service.
      </p>
    </Card>
  );
};

export default TerraformCloudCard;
