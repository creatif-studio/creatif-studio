import { Container } from "components/atoms";
import React from "react";

const Challenge = () => {
  return (
    <div>
      <Container className="mx-auto py-16 px-6 xl:px-0 md:px-10 md:py-33">
        <h4 className="font-semibold font-display">Challenge</h4>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6 mb-8">
            <h3 className="font-semibold font-display text-2xl md:text-2.5xl xl:text-3xl leading-normal mt-4 pb-8 border-b border-black">
              Dynamic infrastructure means infinite volume
            </h3>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <p className="text-neutral-600 leading-relaxed">
              As organizations make the move to cloud, they are dealing with a
              number of issues, including error-prone manual workloads for
              central IT, slow ticketing systems, slow manual workflows for
              developers, lack of consistent policy enforcements, and unscalable
              infrastructure
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Challenge;
