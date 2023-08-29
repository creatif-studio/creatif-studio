import { Button, Container } from "components/atoms";
import Link from "next/link";
import React from "react";

const Certified = () => {
  return (
    <div className="mt-5 md:mt-10 py-10 md:py-20 bg-gradient-to-r from-[#2C2D2F] to-[#606062] cursor-default">
      <Container className="mx-auto grid grid-cols-1 px-5 md:px-10 xl:px-0 md:grid-cols-3 gap-4 md:gap-8">
        <h2 className="col-span-1 text-3xl md:text-4xl font-semibold font-display text-white leading-normal">
          Get HashiCorp Certified
        </h2>
        <div className="col-span-1 md:col-span-2">
          <p className="text-neutral-200 text-lg mb-10 leading-relaxed">
            Cloud engineers can use the Creatif Studio Associate exam from
            HashiCorp to verify their basic infrastructure automation skills.
          </p>
          <Link href="/">
            <a>
              <Button className="mt-5" mode="primary" buttonSize="md">
                Prepare & get certified
              </Button>
            </a>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Certified;
