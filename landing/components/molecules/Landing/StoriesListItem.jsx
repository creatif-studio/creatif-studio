import React from "react";
import Link from "next/link";

import { BiLinkExternal } from "react-icons/bi";

const StoriesListItem = ({ heading = "", href = "/" }) => {
  return (
    <li>
      <Link href={href}>
        <a>
          <div className="flex items-start gap-2 py-8 hover:animate-[move-little-to-right_0.4s_forwards]">
            <h4 className="font-semibold font-display">{heading}</h4>
            <BiLinkExternal size={18} className="flex-shrink-0" />
          </div>
        </a>
      </Link>
    </li>
  );
};

export default StoriesListItem;
