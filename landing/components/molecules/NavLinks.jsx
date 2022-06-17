import { NavLink, NavLinkExpanded } from "components/atoms";
import React from "react";

import {
  DOCS_LINK_CONTENT,
  EDITIONS_LINK_CONTENT,
  USECASE_LINK_CONTENT,
} from "utils/constants";

const NavLinks = () => {
  return (
    <div className="h-16 hidden xl:flex items-center justify-start flex-grow">
      <NavLink>Overview</NavLink>
      <NavLinkExpanded dataSource={USECASE_LINK_CONTENT}>
        Use Cases
      </NavLinkExpanded>
      <NavLinkExpanded dataSource={EDITIONS_LINK_CONTENT}>
        Editions
      </NavLinkExpanded>
      <NavLink>Registry</NavLink>
      <NavLink>Tutorials</NavLink>
      <NavLinkExpanded dataSource={DOCS_LINK_CONTENT}>Docs</NavLinkExpanded>
      <NavLink>Community</NavLink>
    </div>
  );
};

export default NavLinks;
