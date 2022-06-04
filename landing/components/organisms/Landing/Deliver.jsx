import React from "react";

import Image from "next/image";

import assets from "assets";
import { Container } from "components/atoms";
import { DeliverContent } from "components/molecules";

const Deliver = () => {
  return (
    <div className="bg-deliver-gradient cursor-default">
      <Container className="mx-auto pt-16 md:pt-20 pb-10 md:pb-20 px-5 md:px-0">
        <h2 className="text-3xl md:text-4xl font-semibold font-display text-center mb-6">
          Deliver infrastructure as code
        </h2>
        <p className="text-neutral-500 text-lg text-center mb-10">
          Terraform codifies cloud APIs into declarative configuration files.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:pr-20">
            <Image src={assets.images.DELIVER_IMAGE} alt="deliver image" />
          </div>
          <DeliverContent />
        </div>
      </Container>
    </div>
  );
};

export default Deliver;
