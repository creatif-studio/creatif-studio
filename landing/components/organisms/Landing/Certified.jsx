import { Button, Container } from "components/atoms";
import Link from "next/link";
import React from "react";

const Certified = () => {
  return (
    <div className="mt-5 xl:mt-10 py-10 xl:py-20 bg-gradient-to-r from-[#2C2D2F] to-[#606062] cursor-default">
      <Container className="mx-auto grid grid-cols-1 px-5 xl:px-0 xl:grid-cols-3 gap-4 xl:gap-8">
        <h2 className="col-span-1 text-3xl xl:text-4xl font-semibold font-display text-white leading-normal">
          Get HashiCorp Certified
        </h2>
        <div className="col-span-1 xl:col-span-2">
          <p className="text-neutral-200 text-lg mb-10 leading-relaxed">
            Cloud engineers can use the Terraform Associate exam from HashiCorp
            to verify their basic infrastructure automation skills.
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
