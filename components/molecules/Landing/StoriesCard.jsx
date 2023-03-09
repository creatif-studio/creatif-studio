import { Card } from "components/atoms";
import Link from "next/link";
import React from "react";

const StoriesCard = ({ href = "/", src = "", header = "Header" }) => {
  return (
    <Link href={href}>
      <a className="col-span-1 md:col-span-2 xl:col-span-1">
        <Card className="border-0 h-76 md:h-96 rounded-md bg-white relative overflow-hidden group">
          <img
            src={src}
            alt="stories"
            className="h-full w-full object-cover transition-all ease-in group-hover:scale-105 duration-300 group-hover:opacity-80 "
          />
          <div className="absolute top-0 right-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-black/40 ease-in flex items-end p-8">
            <h3 className="font-semibold font-display text-xl md:text-2xl text-white">
              {header}
            </h3>
          </div>
        </Card>
      </a>
    </Link>
  );
};

export default StoriesCard;
