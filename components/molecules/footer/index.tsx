import {
  Facebook,
  Instagram,
  Linkendin,
  Location,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "@/assets/icons";
import { BaseButton } from "@/components/atoms";
import { Brand } from "@/components/atoms/brand";
import Link from "next/link";
import React from "react";

const FooterSection = () => {
  return (
    <footer className="bg-[#0D0E13] rounded-t-[50px] text-white ">
      <div className="flex flex-col gap-4 px-6 py-16 mx-auto md:flex-row md:items-center md:justify-between lg:px-16 lg:max-w-screen-xl">
        <div className="flex flex-col gap-4">
          <h1 className="max-w-xs text-4xl font-semibold lg:max-w-full lg:text-6xl">
            Ready to work with us?
          </h1>
          <p>
            Partner with our digital agency for your business with amazing
            results.
          </p>
        </div>
        {/* <BaseButton
            variant="secondary"
            label="Let's Talk"
            className="font-semibold"
          /> */}
        <a
          href="https://api.whatsapp.com/send/?phone=6285159842622&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-4 text-sm font-semibold text-black duration-200 bg-white rounded-full w-fit hover:opacity-80 transtion "
        >
          {"Let's Talk"}
        </a>
      </div>
      <div className="w-full h-[1px] opacity-20 bg-white"></div>
      <div className="flex flex-col px-6 py-16 mx-auto gap-13 lg:flex-row lg:justify-between lg:px-16 lg:max-w-screen-xl">
        <div className="space-y-4">
          <Brand />
          <p className="max-w-sm">
            Creatif Studio a.k.a PT. Creatif Studio International, Serang - Banten, Kecamatan Cikande, Bumi Cikande Indah, 42186.
          </p>
          <div className="flex items-center gap-8">
            <a
              href={"https://facebook.com/creatifstudiointernational"}
              className="cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="cursor-pointer">
                <Facebook />
              </div>
            </a>
            <a
              href={"#"}
              // target="_blank"
              // rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <div className="cursor-pointer">
                <Twitter />
              </div>
            </a>
            <a
              href={"#"}
              // target="_blank"
              // rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <div className="cursor-pointer">
                <Instagram />
              </div>
            </a>
            <a
              href={"https://linkedin.com/company/creatif-studio-international"}
              className="cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="cursor-pointer">
                <Linkendin />
              </div>
            </a>
            <a
              href={"https://youtube.com/@creatif-studio"}
              className="cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="cursor-pointer">
                <Youtube />
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:gap-24">
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-medium">Other Pages</h4>
            <div className="flex flex-col gap-4">
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Portofolios</Link>
              <Link href={"/"}>Services</Link>
              <Link href={"/"}>Blog</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-medium">Company</h4>
            <div className="flex flex-col gap-4">
              <Link href={"/"}>Terms Conditions</Link>
              <Link href={"/"}>Privacy Policy</Link>
              <Link href={"/"}>Cookies</Link>
              <Link href={"/"}>Careers</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-xl font-medium">Contact</h4>
            <div className="flex flex-col gap-4">
              <Link href={"/"}>
                <div className="flex items-center gap-2">
                  <Mail />
                  hi@creatif.studio
                </div>
              </Link>
              <Link href={"/"}>
                <div className="flex items-center gap-2">
                  <Phone />
                  {"(+62) 851 5984 2622"}
                </div>
              </Link>
              <Link href={"/"}>
                <div className="flex items-center gap-2">
                  <Location />
                  Cikande, Indonesia
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-6 pb-6 mx-auto lg:py-12 lg:justify-end lg:px-16 lg:max-w-screen-xl">
        <p className="text-xs">
          ©2023 PT. Creatif Studio International. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
