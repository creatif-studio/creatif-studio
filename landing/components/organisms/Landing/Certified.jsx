import { Button, Container } from "components/atoms";
import Link from "next/link";
import React from "react";

const Certified = () => {
  return (
    <div className="mt-10 py-20 bg-gradient-to-r from-[#2C2D2F] to-[#606062]">
      <Container className="mx-auto grid grid-cols-3 gap-8">
        <h2 className="col-span-1 text-4xl font-semibold font-display text-white leading-normal">
          Get HashiCorp Certified
        </h2>
        <div className="col-span-2">
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
