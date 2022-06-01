import React from "react";
import { BsChevronDown } from "react-icons/bs";
import Button from "./Button";

const NavLink = ({ children, canExpand }) => {
  return (
    <Button
      className="text-sm font-medium w-24 py-2 flex items-center gap-2 justify-center outline-none"
      icon={canExpand ? BsChevronDown : undefined}
      neutral
      iconPosition="right"
      iconSize={8}
    >
      {children}
    </Button>
  );
};

export default NavLink;
