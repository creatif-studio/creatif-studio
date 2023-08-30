// core modules
import NavbarTriggerProvider from "context/NavbarTriggerProvider";
import ProductsCreatifPricingDivider from "components/atoms/Divider";
import ProductsCreatifPricingNavbar from "components/organisms/ProductsNavbar";
import ProductsCreatifPricingFooter from "components/organisms/ProductsCreatif/Footer";
import ProductsCreatifPricingFaq from "components/organisms/ProductsCreatifPricing/Faq";
import ProductsCreatifPricingHero from "components/organisms/ProductsCreatifPricing/Hero";
import ProductsCreatifPricingNavBottom from "components/organisms/ProductsCreatif/NavBottom";

const ProductsCreatifPricing = () => {
  return (
    <NavbarTriggerProvider>
      <main>
        <ProductsCreatifPricingNavbar variant="main" />
        <ProductsCreatifPricingHero />
        <ProductsCreatifPricingFaq />
        <ProductsCreatifPricingDivider classNameOverrideMargin="mt-36 mb-10" />
        <ProductsCreatifPricingNavBottom />
        <ProductsCreatifPricingDivider />
        <ProductsCreatifPricingFooter />
      </main>
    </NavbarTriggerProvider>
  );
};

export default ProductsCreatifPricing;
