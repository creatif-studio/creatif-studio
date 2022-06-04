import {
  Certified,
  CustomerStories,
  Deliver,
  Footer,
  Hero,
  Navbar,
  NextSteps,
  Practice,
  UseCases,
} from "components/organisms";

export default function Landing() {
  return (
    <div className="">
      <Navbar />
      <Hero />
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
