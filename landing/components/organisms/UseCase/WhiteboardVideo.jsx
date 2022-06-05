import { Container } from "components/atoms";
import { VideoPlay } from "components/molecules";
import React from "react";

const WhiteboardVideo = () => {
  return (
    <div className="mt-16 xl:mt-33 mb-16 px-6 xl:px-0">
      <Container className="mx-auto rounded-md bg-black grid grid-cols-12 gap-8">
        <VideoPlay />
        <div className="col-span-12 xl:col-span-4 py-8 xl:py-24 px-8">
          <h3 className="text-xl xl:text-2xl font-display text-white font-semibold max-w-xs">
            Challenges & Opportunities of Multi-Cloud Adoption
          </h3>
          <p className="text-sm mt-2 mb-16 xl:mb-0 text-white leading-relaxed">
            Watch this whiteboard video by HashiCorp Co-Founder and CTO Armon
            Dadgar to learn how IT operators, networking teams, security teams,
            and developers can navigate the transition to newer, dynamic,
            cloud-based infrastructures.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default WhiteboardVideo;
