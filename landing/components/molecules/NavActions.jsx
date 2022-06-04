import React from "react";

import { BsDownload, BsGithub } from "react-icons/bs";

import { Button } from "components/atoms";

const NavActions = () => {
  return (
    <div className="flex-shrink-0 hidden xl:flex items-center gap-4">
      <Button
        neutral
        icon={BsGithub}
        iconSize={24}
        className="p-1.5 border border-gray-300 hover:bg-gray-200 flex items-center justify-center transition-colors ease-in"
      />
      <Button mode="secondary">Terraform Cloud</Button>
      <Button icon={BsDownload} iconSize={16}>
        Download
      </Button>
    </div>
  );
};

export default NavActions;
