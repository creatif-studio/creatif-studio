// core modules
import { memo } from "react";
import { useRouter } from "next/router";
// third part modules
import clsx from "clsx";
// internal modules
import ProductsLink from "components/atoms/ProductsLink";
import ProductsLinkButton from "components/atoms/ProductsLinkButton";

const ProductsNavLinksMobile = ({ shouldBeShow = false, className }) => {
  const { pathname } = useRouter();

  return (
    <section
      className={clsx(
        shouldBeShow ? "flex" : "hidden",
        className,
        "flex-col fixed inset-0 bg-white z-40 pt-16 px-6 md:items-center lg:hidden"
      )}
    >
      <ProductsLink
        href="/products/terraform/pricing"
        className="mt-7 pb-1"
        classNameActive={
          pathname === "/products/terraform/pricing" &&
          "border-b-[2px] border-black"
        }
      >
        Pricing
      </ProductsLink>
      <ProductsLink href="/" className="mt-6 pb-1">
        Documentation
      </ProductsLink>
      <ProductsLink href="/" className="mt-6 pb-1">
        Business
      </ProductsLink>
      <hr className="w-full divide-y border-gray-300 mt-6" />
      <ProductsLink href="/" className="text-base mt-5">
        Sign In
      </ProductsLink>
      <ProductsLinkButton
        href="/"
        classNameOverridePadding="px-6 py-2"
        className="mt-5 rounded"
        variant="primary"
      >
        Try Creatif Studio Pro
      </ProductsLinkButton>
    </section>
  );
};

export default memo(ProductsNavLinksMobile);
