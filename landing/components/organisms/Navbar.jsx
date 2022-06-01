import { Brand, Container } from "components/atoms";
import { NavLinks, NavActions } from "components/molecules";

import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white flex justify-center h-16 sticky top-0 z-10 ">
      <Container className="flex items-center justify-between gap-3">
        <Brand />
        <NavLinks />
        <NavActions />
      </Container>
    </div>
  );
};

export default Navbar;
