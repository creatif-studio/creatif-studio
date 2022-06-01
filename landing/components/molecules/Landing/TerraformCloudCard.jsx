import { Button, Card } from "components/atoms";
import React from "react";

const TerraformCloudCard = () => {
  return (
    <Card className="shadow bg-white border-neutral-200 h-full py-10 px-8 max-w-sm cursor-default">
      <h2 className="font-semibold font-display text-2xl">Terraform Cloud</h2>
      <h3 className="text-sm font-semibold font-display my-3">
        Managed Terraform
      </h3>
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
