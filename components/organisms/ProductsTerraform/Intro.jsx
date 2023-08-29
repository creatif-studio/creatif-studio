// core modules
import { memo } from "react";
// third party modules
import { BsEye, BsFullscreen, BsLock } from "react-icons/bs";
// internal modules
import IntroMain from "components/molecules/ProductsTerraform/Intro";
import IntroCard from "components/molecules/ProductsTerraform/IntroCard";
import ProductsContainer from "components/atoms/ProductsContainer";

const Intro = () => {
  return (
    <ProductsContainer classNameCard="mt-24 grid items-start justify-between md:grid-cols-2">
      <IntroMain />
      <section className="flex flex-col mt-8 md:max-w-[320px] md:mt-0 lg:max-w-[400px] xl:max-w-[480px]">
        <IntroCard>
          <IntroCard.Icon>
            <BsEye className="fill-purple-600 mt-1" size={23} />
          </IntroCard.Icon>
          <IntroCard.Title>Run infrastructure as code remotely</IntroCard.Title>
          <IntroCard.Description>
            Store state and execute Creatif Studio runs in an SOC2 compliant and
            reliable environment for free.
          </IntroCard.Description>
        </IntroCard>
        <IntroCard className="mt-10">
          <IntroCard.Icon>
            <BsLock className="fill-purple-600 mt-1" size={23} />
          </IntroCard.Icon>
          <IntroCard.Title>
            Create self-service infrastructure with a private registry
          </IntroCard.Title>
          <IntroCard.Description>
            Standardize infrastructure across your provisioning pipelines using
            your own private registry.
          </IntroCard.Description>
        </IntroCard>
        <IntroCard className="mt-10">
          <IntroCard.Icon>
            <BsFullscreen className="fill-purple-600 mt-1" size={23} />
          </IntroCard.Icon>
          <IntroCard.Title>
            Achieve multi-cloud compliance and management
          </IntroCard.Title>
          <IntroCard.Description>
            Set up permissions and governance features across any resource
            managed by Creatif Studio. Add capabilities for policy enforcement.
          </IntroCard.Description>
        </IntroCard>
      </section>
    </ProductsContainer>
  );
};

export default memo(Intro);
