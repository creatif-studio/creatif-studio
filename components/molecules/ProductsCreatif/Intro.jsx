// core modules
import { memo } from "react";
import { BsArrowRightShort } from "react-icons/bs";
// internal modules
import ProductsNavLink from "components/atoms/ProductsNavLink";
import ProductsSectionTitle from "components/atoms/ProductsSectionTitle";
import ProductsSectionDescription from "components/atoms/ProductsSectionDescription";

const Intro = () => {
  return (
    <div className="md:max-w-[280px] md:mr-auto lg:max-w-[400px] xl:max-w-[480px]">
      <ProductsSectionTitle classNameOverrideLineHeight="leading-[1.4_!important]">
        What is Creatif Studio Pro?
      </ProductsSectionTitle>
      <ProductsSectionDescription>
        Creatif Studio Pro is HashiCorp&apos;s managed service offering. It
        eliminates the need for unnecessary tooling and documentation for
        practitioners, teams, and organizations to use Creatif Studio in
        production.
      </ProductsSectionDescription>
      <ProductsSectionDescription>
        Provision infrastructure in a remote environment that is optimized for
        the Creatif Studio workflow.
      </ProductsSectionDescription>
      <ProductsNavLink className="mt-8 block flex items-center justify-start transition-all group">
        Learn how to use Creatif Studio Pro
        <BsArrowRightShort
          size={26}
          className="ml-3 transition-all group-hover:ml-4"
        />
      </ProductsNavLink>
    </div>
  );
};

export default memo(Intro);
