import { Button, NavLink, NavLinkExpanded } from "components/atoms";
import React from "react";

const NavLinks = () => {
  return (
    <div className="h-16 flex items-center justify-start flex-grow">
      <NavLink>Overview</NavLink>
      <NavLinkExpanded>Use Cases</NavLinkExpanded>
      <NavLinkExpanded>Editions</NavLinkExpanded>
      <NavLink>Registry</NavLink>
      <NavLink>Tutorials</NavLink>
      <NavLinkExpanded>Docs</NavLinkExpanded>
      <NavLink>Community</NavLink>
    </div>
  );
};

export default NavLinks;
