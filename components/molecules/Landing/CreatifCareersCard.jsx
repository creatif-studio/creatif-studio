import { Button, Card } from "components/atoms";
import React from "react";
import { BsMailbox2 } from "react-icons/bs";

const CreatifCareersCard = () => {
  return (
    <Card className="col-span-1 shadow bg-white border-neutral-200 h-full py-8 px-8 md:max-w-sm cursor-default opacity-0 animate-[move-to-top_0.5s_forwards_0.5s]">
      <h3 className="font-semibold font-display text-2xl">
        Join Our Growing Team
      </h3>
      <h4 className="text-sm font-semibold font-display my-3">
        Unlock Exciting Prospects
      </h4>
      <Button
        className="mt-5"
        icon={BsMailbox2}
        mode="tertiary"
        buttonSize="md"
      >
        Apply
      </Button>
      <p className="text-sm text-neutral-500 mt-8 leading-relaxed">
        We offers an opportunity to contribute in designing products, software
        development, manual/automation testing, cloud infrastructure, and more.
      </p>
    </Card>
  );
};

export default CreatifCareersCard;
