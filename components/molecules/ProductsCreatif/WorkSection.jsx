// core modules
import { memo } from "react";
// third party modules
import clsx from "clsx";
// internal modules
import IntroCard from "components/molecules/ProductsCreatif/IntroCard";
import ProductsSectionSubtitle from "components/atoms/ProductsSectionSubtitle";
import ProductsSectionDescription from "components/atoms/ProductsSectionDescription";

const WorkSection = ({
  className,
  Title,
  Description,
  CardIcon,
  CardTitle,
  CardDescription,
  Image,
}) => {
  return (
    <div
      className={clsx(
        className,
        "flex flex-col mt-10 md:mt-32 md:items-start md:flex-row md:items-center xl:items-start"
      )}
    >
      <section className="md:w-5/12 lg:w-6/12 xl:pr-22">
        <ProductsSectionSubtitle className="text-2xl font-semibold lg:text-3xl">
          {Title}
        </ProductsSectionSubtitle>
        <ProductsSectionDescription className="mt-6">
          {Description}
        </ProductsSectionDescription>
        <IntroCard className="mt-10 md:mr-0">
          <IntroCard.Icon>{CardIcon}</IntroCard.Icon>
          <IntroCard.Title className="text-base font-bold md:text-base lg:text-base">
            {CardTitle}
          </IntroCard.Title>
          <IntroCard.Description>{CardDescription}</IntroCard.Description>
        </IntroCard>
      </section>
      <section className="mt-10 md:ml-12 md:mt-0 md:w-7/12 lg:ml-auto">
        {Image}
      </section>
    </div>
  );
};

export default memo(WorkSection);
