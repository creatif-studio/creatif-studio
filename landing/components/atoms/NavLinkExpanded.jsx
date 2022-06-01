import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const NavLinkExpanded = ({ children }) => {
  const [expand, setExpand] = useState(false);
  return (
    <span className="text-sm font-medium w-24 py-2 flex items-center gap-2 justify-center outline-none cursor-pointer">
      {children}
      <BsChevronDown size={8} />
    </span>
  );
};

export default NavLinkExpanded;
