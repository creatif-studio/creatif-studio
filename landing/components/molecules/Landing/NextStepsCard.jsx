import { Card } from "components/atoms";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const NextStepsCard = ({
  heading,
  linkName,
  href = "/",
  description,
  className = "",
}) => {
  return (
    <li className="h-full group">
      <Link href={href}>
        <a>
          <Card
            className={`border-0 rounded-md px-5 py-8 h-full flex flex-col justify-between ${className}`}
          >
            <div>
              <h3 className="font-semibold font-display text-1.5xl">
                {heading}
              </h3>
              <h4 className="text font-semibold font-display my-3">
                {description}
              </h4>
            </div>
            <div>
              <p className="text-sm font-medium flex items-center gap-3 max-w-fit">
                {linkName}
                <BsArrowRight
                  size={18}
                  className="group-hover:animate-move-right"
                />
              </p>
            </div>
          </Card>
        </a>
      </Link>
    </li>
  );
};

export default NextStepsCard;
