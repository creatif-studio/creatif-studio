import {
  Certified,
  CustomerStories,
  Deliver,
  Footer,
  LandingHero,
  Navbar,
  NextSteps,
  Practice,
  UseCases,
} from "components/organisms";

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
      <Footer />
    </div>
  );
}
