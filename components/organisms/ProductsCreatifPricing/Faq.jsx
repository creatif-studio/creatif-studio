// core modules
import { memo } from "react";
// internal modules
import ProductsContainer from "components/atoms/ProductsContainer";
import FaqNav from "components/molecules/ProductsCreatifPricing/FaqNav";
import FaqTitle from "components/molecules/ProductsCreatifPricing/FaqTitle";
import FaqCollapse from "components/molecules/ProductsCreatifPricing/FaqCollapse";

const Faq = () => {
  return (
    <>
      <ProductsContainer>
        <FaqTitle />
      </ProductsContainer>
      <ProductsContainer classNameCard="w-[90%] mx-auto">
        <FaqNav />
        <FaqCollapse />
      </ProductsContainer>
    </>
  );
};

export default memo(Faq);
