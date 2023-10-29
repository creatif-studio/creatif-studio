import { CreatifDark } from "@/assets/icons";
import Link from "next/link";
import React from "react";

export const Brand = () => {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-2 cursor-pointer">
        <CreatifDark />
        <h2 className="font-semibold">Creatif Studio</h2>
      </div>
    </Link>
  );
};
