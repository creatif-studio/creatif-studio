import assets from "assets";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Brand = ({ href = "/" }) => {
  return (
    <div className="flex-shrink-0 flex items-center">
      <Link href={href}>
        <a className="flex items-center">
          <Image src={assets.images.BRAND} height={40} width={150} />
        </a>
      </Link>
    </div>
  );
};

export default Brand;
