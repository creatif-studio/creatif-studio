import { Card } from "components/atoms";
import Link from "next/link";
import React from "react";

const UseCaseCard = ({ children, href = "/" }) => {
  return (
    <li className="col-span-1">
      <Link href={href}>
        <a>
          <Card className="border-neutral-200 px-7 py-8 h-80 flex flex-col justify-between hover:shadow-lg hover:ring-2 hover:ring-neutral-200">
            {children}
          </Card>
        </a>
      </Link>
    </li>
  );
};

export default UseCaseCard;
