// core modules
import { memo } from 'react'
// internal modules
import ProductsLink from 'components/atoms/ProductsLink'
import ProductsContainer from 'components/atoms/ProductsContainer'
import HeroTitle from 'components/molecules/ProductsTerraformPricing/HeroTitle'
import SelfManage from 'components/molecules/ProductsTerraformPricing/SelfManage'
import PricingCardGroup from 'components/molecules/ProductsTerraformPricing/PricingCardGroup'

const Hero = () => {
    return (
        <ProductsContainer classNameContainer="bg-no-repeat bg-products-terraform-pricing-hero bg-[top_left_200px] md:bg-right-top">
            <HeroTitle />
            <PricingCardGroup />
            <SelfManage />
            <p className="text-center mt-10 text-sm">Have a question or need a <ProductsLink classNameOverrideWeight="font-normal" className="underline inline">custom solution</ProductsLink>?</p>
        </ProductsContainer>
    )
}

export default memo(Hero)