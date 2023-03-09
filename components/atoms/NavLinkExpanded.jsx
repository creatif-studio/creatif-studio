import Link from "next/link";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import PopupContainer from "./popup/Container";

const NavLinkExpanded = ({ children, dataSource = [] }) => {
  const [expand, setExpand] = useState(false);
  return (
    <PopupContainer
      className={`py-4 px-4`}
      items={
        dataSource.length > 0 && (
          <ul>
            {dataSource.map((item) => (
              <li key={item.id} className="first:mt-0 mt-2">
                <Link href={item.href}>
                  <a className="text-sm font-medium hover:underline">
                    {item.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        )
      }
    >
      <span
        className="text-sm font-medium w-24 py-2 flex items-center gap-2 justify-center outline-none cursor-pointer"
        onClick={() => setExpand((prev) => !prev)}
      >
        {children}
        <BsChevronDown
          size={8}
          className={`transition-all duration-500 ${
            expand ? "rotate-180" : "rotate-0"
          }`}
        />
      </span>
    </PopupContainer>
  );
};

export default NavLinkExpanded;
