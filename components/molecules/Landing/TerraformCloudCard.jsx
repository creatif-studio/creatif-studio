import { Button, Card } from "components/atoms";
import React from "react";

const TerraformCloudCard = () => {
  return (
    <Card className="col-span-1 shadow bg-white border-neutral-200 h-full py-8 px-8 md:max-w-sm cursor-default opacity-0 animate-[move-to-top_0.5s_forwards_0.5s]">
      <h3 className="font-semibold font-display text-2xl">CloudBoz Pro</h3>
      <h4 className="text-sm font-semibold font-display my-3">
        Managed CloudBoz
      </h4>
      <Button className="mt-5" mode="primary" buttonSize="md">
        Try CloudBoz Pro
      </Button>
      <p className="text-sm text-neutral-500 mt-8 leading-relaxed">
        CloudBoz Pro enables infrastructure automation for provisioning,
        compliance, and management of any cloud, datacenter, and service.
      </p>
    </Card>
  );
};

export default TerraformCloudCard;
