import Link from "next/link";
import React from "react";

const NavLink = ({ children, href = "" }) => {
  return (
    <Link href={href}>
      <a className="text-sm font-medium w-24 py-2 flex items-center gap-2 justify-center outline-none">
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
