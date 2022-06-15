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

import Divider from 'components/atoms/Divider'
import Footer from 'components/organisms/ProductsTerraform/Footer'
import NavBottom from 'components/organisms/ProductsTerraform/NavBottom'

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
