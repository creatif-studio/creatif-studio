import {
  Challenge,
  CustomerCaseStudy,
  Footer,
  Navbar,
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
      <WhiteboardVideo />
      <Footer />
    </div>
  );
};

export default UseCasePage;
