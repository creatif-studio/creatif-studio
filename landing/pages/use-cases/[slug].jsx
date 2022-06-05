import {
  Challenge,
  CustomerCaseStudy,
  Footer,
  Navbar,
  Resources,
  Solution,
  UseCaseHero,
  WhiteboardVideo,
} from "components/organisms";
import React from "react";

const UseCasePage = () => {
  return (
    <div>
      <Navbar />
      <UseCaseHero />
      <Challenge />
      <Solution />
      <CustomerCaseStudy />
      <Resources />
      <WhiteboardVideo />
      <Footer />
    </div>
  );
};

export default UseCasePage;
