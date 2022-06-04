import Link from "next/link";
import React from "react";

const FooterLink = ({ children, href = "/" }) => {
  return (
    <Link href={href}>
      <a className="text-xs px-4 py-2 flex items-center gap-2 justify-center outline-none">
        {children}
      </a>
    </Link>
  );
};

export default FooterLink;
