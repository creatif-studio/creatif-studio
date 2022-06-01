import { Button, NavLink } from "components/atoms";
import React from "react";

const NavLinks = () => {
  return (
    <div className="h-16 flex items-center justify-start flex-grow">
      <NavLink>Overview</NavLink>
      <NavLink canExpand>Use Cases</NavLink>
      <NavLink canExpand>Editions</NavLink>
      <NavLink>Registry</NavLink>
      <NavLink>Tutorials</NavLink>
      <NavLink canExpand>Docs</NavLink>
      <NavLink>Community</NavLink>
    </div>
  );
};

export default NavLinks;
