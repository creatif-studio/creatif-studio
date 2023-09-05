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
      <div className="px-6 py-16 flex flex-col gap-4 md:flex-row md:items-center md:justify-between lg:px-30">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold max-w-xs">
            Ready to work with us?
          </h1>
          <p>
            Partner with our digital agency for your business with amazing
            results.
          </p>
        </div>
        <BaseButton
          variant="secondary"
          label="let's Talk"
          className="font-semibold"
        />
      </div>
      <div className="w-full h-[1px] opacity-20 bg-white"></div>
      <div className="px-6 py-16 flex flex-col gap-13 lg:px-30">
        <div className="space-y-4">
          <Brand />
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <div className="flex items-center gap-8">
            <Link href={"/"} className="cursor-pointer">
              <div className="cursor-pointer">
                <Facebook />
              </div>
            </Link>
            <Link href={"/"} className="cursor-pointer">
              <div className="cursor-pointer">
                <Twitter />
              </div>
            </Link>
            <Link href={"/"} className="cursor-pointer">
              <div className="cursor-pointer">
                <Instagram />
              </div>
            </Link>
            <Link href={"/"} className="cursor-pointer">
              <div className="cursor-pointer">
                <Linkendin />
              </div>
            </Link>
            <Link href={"/"} className="cursor-pointer">
              <div className="cursor-pointer">
                <Youtube />
              </div>
            </Link>
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
                  {"(+021) 1580 3658"}
                </div>
              </Link>
              <Link href={"/"}>
                <div className="flex items-center gap-2">
                  <Location />
                  Jawabarat, Indonesia
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-end">
          <p className="text-xs">
            ©2023 PT. Creatif Studio International. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
