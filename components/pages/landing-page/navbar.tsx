import { Clear, HumburgerMenu } from "@/assets/icons";
import { BaseButton } from "@/components/atoms";
import { Brand } from "@/components/atoms/brand";
import { clsx } from "@/libs";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleOpenNav = () => {
    setIsOpen(true);
  };

  const handleCloseNav = () => {
    setIsOpen(false);
  };

  const checkRoute = (path: string) => {
    const currentPath = router.asPath;
    const replace = currentPath.replace("/", "");

    if (path == replace) {
      return true;
    }
    return false;
  };

  return (
    <nav className="absolute text-white w-full top-0 left-0 px-6 py-8 flex items-center justify-between md:px-13 lg:px-30">
      <Brand />
      <div className="hidden lg:flex items-center gap-10">
        <Link href={"#hero"}>
          <p className="cursor-pointer">Home</p>
        </Link>
        <Link href={"#service"}>
          <p className="cursor-pointer">Service</p>
        </Link>
        <Link href={"#portfolio"}>
          <p className="cursor-pointer">Testimonial</p>
        </Link>
        <Link href={"#testi"}>
          <p className="cursor-pointer">Testimonial</p>
        </Link>
        <Link href={"#teams"}>
          <p className="cursor-pointer">Teams</p>
        </Link>
        {/* <Link href={"#service"}>Service</Link>
        <Link href={"#portfolio"}>Portfolio</Link>
        <Link href={"#testi"}>Testimonial</Link>
        <Link href={"#teams"}>Teams</Link> */}
      </div>
      <BaseButton
        variant="secondary"
        label="Contact Us"
        className="font-semibold hidden lg:block"
      />
      <button className="block lg:hidden" onClick={handleOpenNav}>
        <HumburgerMenu />
      </button>
      <div
        className={clsx(
          "block top-0 left-0 w-full bg-[#0D0E13] h-screen p-8 z-50 lg:hidden",
          isOpen ? "absolute" : "hidden"
        )}
      >
        <div className="flex w-full justify-end">
          <button onClick={handleCloseNav}>
            <Clear />
          </button>
        </div>
        <div className="flex flex-col items-center gap-8 mt-4">
          <Link href={"#hero"}>
            <p onClick={handleCloseNav}>Home</p>
          </Link>
          <Link href={"#service"}>
            <p onClick={handleCloseNav}>Service</p>
          </Link>
          <Link href={"#portfolio"} onClick={handleCloseNav}>
            Portfolio
          </Link>
          <Link href={"#testi"} onClick={handleCloseNav}>
            <p onClick={handleCloseNav}>Testimonial</p>
          </Link>
          <Link href={"#teams"} onClick={handleCloseNav}>
            <p onClick={handleCloseNav}>Teams</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
