import {
  Certified,
  CustomerStories,
  Deliver,
  LandingHero,
  Navbar,
  NextSteps,
  Practice,
  UseCases,
} from "components/organisms";

import Divider from "components/atoms/Divider";
import Footer from "components/organisms/ProductsCreatif/Footer";
import NavBottom from "components/organisms/ProductsCreatif/NavBottom";

export default function Landing() {
  return (
    <div className="">
      <Navbar />
      <LandingHero />
      <Deliver />
      <UseCases />
      <Practice />
      <CustomerStories />
      <Certified />
      <NextSteps />
      <Divider />
      <NavBottom />
      <Divider />
      <Footer />
    </div>
  );
}
