import { Container } from "components/atoms";
import { ResourcesContent } from "components/molecules";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Resources = () => {
  return (
    <div className="py-16 px-6 md:px-10 xl:px-0 md:py-33">
      <Container className="mx-auto">
        <h2 className="font-display text-2.5xl md:text-3.5xl xl:text-4.5xl font-semibold text-center mb-16">
          Resources
        </h2>
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-semibold font-display">Tutorials</h3>
          <Link href="/">
            <a className="text-sm font-medium flex items-center gap-3 group max-w-fit">
              Explore all
              <BsArrowRight
                size={18}
                className="group-hover:animate-move-right"
              />
            </a>
          </Link>
        </div>
        <ResourcesContent />
      </Container>
    </div>
  );
};

export default Resources;
