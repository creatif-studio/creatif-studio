import { Brand, Container } from "components/atoms";
import { NavLinks } from "components/molecules";
import NavActions from "components/molecules/NavActions";
import React from "react";

const Navbar = () => {
  return (
    <div className="border-b border-gray-300 flex justify-center h-16 sticky top-0 ">
      <Container className="flex items-center justify-between gap-3">
        <Brand />
        <NavLinks />
        <NavActions />
      </Container>
    </div>
  );
};

export default Navbar;
