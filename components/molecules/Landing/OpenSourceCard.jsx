import { Button, Card } from "components/atoms";
import React from "react";

const OpenSourceCard = () => {
  return (
    <Card className="col-span-1 shadow bg-white border-neutral-200 h-full py-8 px-8 md:max-w-sm cursor-default opacity-0 animate-[move-to-top_0.5s_forwards_0.3s]">
      <h3 className="font-semibold font-display text-2xl">Open Source</h3>
      <h4 className="text-sm font-semibold font-display my-3">
        Self-managed | always free
      </h4>
      <Button className="mt-5" mode="tertiary" buttonSize="md">
        Download
      </Button>
      <p className="text-sm text-neutral-500 mt-8 leading-relaxed">
        Download the open source Creatif Studio binary and run locally or within
        your environments.
      </p>
    </Card>
  );
};

export default OpenSourceCard;
