// internal modules
import ProductsDivider from "components/atoms/Divider";
import ProductsNavbar from "components/organisms/ProductsNavbar";
import NavbarTriggerProvider from "context/NavbarTriggerProvider";
import ProductsContainer from "components/atoms/ProductsContainer";
import ProductsHero from "components/organisms/ProductsCreatif/Hero";
import ProductsIntro from "components/organisms/ProductsCreatif/Intro";
import ProductsFooter from "components/organisms/ProductsCreatif/Footer";
import ProductsHowItWork from "components/organisms/ProductsCreatif/HowItWork";
import ProductsNavBottom from "components/organisms/ProductsCreatif/NavBottom";
import ProductsGetStarted from "components/organisms/ProductsCreatif/GetStarted";
import ProductsScaleTeams from "components/organisms/ProductsCreatif/ScaleTeams";

const ProductsCreatif = () => {
  return (
    <NavbarTriggerProvider>
      <main>
        <ProductsNavbar variant="main" />
        <ProductsHero />
        <ProductsIntro />
        <ProductsContainer />
        <ProductsHowItWork />
        <ProductsScaleTeams />
        <ProductsGetStarted />
        <ProductsDivider />
        <ProductsNavBottom />
        <ProductsDivider />
        <ProductsFooter />
      </main>
    </NavbarTriggerProvider>
  );
};

export default ProductsCreatif;
