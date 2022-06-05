import { Container } from "components/atoms";
import React from "react";

const Challenge = () => {
  return (
    <div>
      <Container className="mx-auto py-33">
        <h4 className="font-semibold font-display">Challenge</h4>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-6 pb-8 mb-8 border-b border-black">
            <h3 className="font-semibold font-display text-3xl leading-normal mt-4">
              Dynamic infrastructure means infinite volume
            </h3>
          </div>
          <div className="col-span-5 col-start-8">
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
