import { memo, forwardRef } from "react";

import { Button } from "components/atoms";
import { BsDownload, BsGithub } from "react-icons/bs";
import ProductsLink from "components/atoms/ProductsLink";

const NavMobileLinks = ({ show }, ref) => {
  return (
    show && (
      <div
        className={`shadow-xl flex flex-col absolute w-[260px] max-h-[490px] overflow-y-auto p-5 bg-white mt-4 left-[-200px]`}
        ref={ref}
      >
        <ProductsLink className="mt-4">Home</ProductsLink>
        {/* <p className="mt-5 uppercase font-display text-xs tracking-widest text-gray-500">
          Products
        </p>
        <hr className="divide-x mt-3 border-gray-300" />
        <ProductsLink className="mt-4">
          CloudBozz - cPanel Alternative
        </ProductsLink>
        <ProductsLink className="mt-4">
          Practiz - Education Marketplace
        </ProductsLink>
        <ProductsLink className="mt-4">
          Binakonten - Free Media Sharing
        </ProductsLink>
        <ProductsLink className="mt-4">
          Binaminat - Interactive Learning
        </ProductsLink>
        <ProductsLink className="mt-4">
          Binakerja - Work from Anywhere
        </ProductsLink>
        <p className="mt-5 uppercase font-display text-xs tracking-widest text-gray-500">
          Others
        </p>
        <hr className="divide-x mt-3 border-gray-300" /> */}

        <ProductsLink className="mt-4">Products</ProductsLink>
        <ProductsLink className="mt-4">Works</ProductsLink>
        <ProductsLink className="mt-4">Careers</ProductsLink>
        <ProductsLink className="mt-4">Contact</ProductsLink>
        {/* <Button icon={BsGithub} iconSize={16} className="mt-4">
          Open Source
        </Button> */}
      </div>
    )
  );
};

export default memo(forwardRef(NavMobileLinks));
