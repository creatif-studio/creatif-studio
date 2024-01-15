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
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Fungsi untuk mengatur status scroll
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Tambahkan event listener untuk scroll
    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener pada komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <nav
      className={clsx(
        scrolling ? "bg-[#0D0E13]" : "bg-none",
        "transition-colors duration-300 fixed top-0 left-0 z-[99]  flex items-center justify-between w-full px-6 py-4 text-white md:px-13 lg:px-24"
      )}
    >
      <Brand />
      <div className="items-center hidden gap-10 lg:flex">
        <Link href={"/"}>
          <p className="text-gray-400 transition duration-300 cursor-pointer hover:text-white ">
            Home
          </p>
        </Link>
        <Link href={"/#services"}>
          <p className="text-gray-400 transition duration-300 cursor-pointer hover:text-white">
            Services
          </p>
        </Link>
        <Link href={"/#portfolios"}>
          <p className="text-gray-400 transition duration-300 cursor-pointer hover:text-white">
            Portfolios
          </p>
        </Link>
        <Link href={"/products"}>
          <p className="text-gray-400 transition duration-300 cursor-pointer hover:text-white">
            Products
          </p>
        </Link>
        <Link href={"/#testimonials"}>
          <p className="text-gray-400 transition duration-300 cursor-pointer hover:text-white">
            Testimonials
          </p>
        </Link>
        <Link href={"/#teams"}>
          <p className="text-gray-400 transition duration-300 cursor-pointer hover:text-white">
            Teams
          </p>
        </Link>
      </div>

      <a
        href="https://api.whatsapp.com/send/?phone=6282120608209&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noreferrer"
        className="hidden px-6 py-4 text-sm font-semibold text-black duration-200 bg-white rounded-full hover:opacity-80 transtion lg:block"
      >
        Contact Us
      </a>
      <button className="block lg:hidden" onClick={handleOpenNav}>
        <HumburgerMenu />
      </button>
      <div
        className={clsx(
          "block top-0 left-0 w-full bg-[#0D0E13] h-screen p-8 z-[999] lg:hidden",
          isOpen ? "absolute" : "hidden"
        )}
      >
        <div className="flex justify-end w-full">
          <button onClick={handleCloseNav}>
            <Clear />
          </button>
        </div>
        <div className="flex flex-col items-center gap-8 mt-4">
          <Link href={"/"}>
            <p onClick={handleCloseNav}>Home</p>
          </Link>
          <Link href={"/#services"}>
            <p onClick={handleCloseNav}>Services</p>
          </Link>
          <Link href={"/#portfolios"} onClick={handleCloseNav}>
            <p onClick={handleCloseNav}>Portfolios</p>
          </Link>
          <Link href={"/products"}>
            <p onClick={handleCloseNav}>Products</p>
          </Link>
          <Link href={"/#testimonials"} onClick={handleCloseNav}>
            <p onClick={handleCloseNav}>Testimonials</p>
          </Link>
          <Link href={"/#teams"} onClick={handleCloseNav}>
            <p onClick={handleCloseNav}>Teams</p>
          </Link>
          <a
            href="https://api.whatsapp.com/send/?phone=6282120608209&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
