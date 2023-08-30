import { NavLink, NavLinkExpanded } from "components/atoms";
import React from "react";

import {
  // DOCS_LINK_CONTENT,
  // EDITIONS_LINK_CONTENT,
  USECASE_LINK_CONTENT,
} from "utils/constants";

const NavLinks = () => {
  return (
    <div className="h-16 hidden xl:flex items-center justify-start flex-grow">
      <NavLink>Home</NavLink>
      {/* <NavLinkExpanded dataSource={USECASE_LINK_CONTENT}>
        Products
      </NavLinkExpanded> */}
      <NavLink>Products</NavLink>
      <NavLink>Works</NavLink>
      <NavLink>Careers</NavLink>
      <NavLink>Contact</NavLink>
      {/* <NavLinkExpanded dataSource={EDITIONS_LINK_CONTENT}>
        Editions
      </NavLinkExpanded> */}
      {/* <NavLinkExpanded dataSource={DOCS_LINK_CONTENT}>Docs</NavLinkExpanded> */}
    </div>
  );
};

export default NavLinks;
