import { Card } from "components/atoms";
import Link from "next/link";
import React from "react";

const PracticeCard = ({ children, href = "/" }) => {
  return (
    <li className="flex-shrink-0 max-w-xxs md:max-w-none md:col-span-1">
      <Link href={href}>
        <a>
          <Card className="border-0 shadow-md px-7 py-8 h-full md:h-80 flex flex-col justify-between bg-custom-gray-1 hover:bg-custom-gray-2 transition-colors ease-in">
            {children}
          </Card>
        </a>
      </Link>
    </li>
  );
};

export default PracticeCard;
