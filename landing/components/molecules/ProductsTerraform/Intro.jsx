// core modules
import { memo } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
// internal modules
import ProductsNavLink from 'components/atoms/ProductsNavLink'
import ProductsSectionTitle from 'components/atoms/ProductsSectionTitle'
import ProductsSectionDescription from 'components/atoms/ProductsSectionDescription'

const Intro = () => {
    return (
        <div className="row-start-1 mt-5 md:row-span-3 md:mr-14 lg:mr-36 xl:mr-18 min-w-[275px]">
            <ProductsSectionTitle>What is Terraform Cloud?</ProductsSectionTitle>
            <ProductsSectionDescription>Terraform Cloud is HashiCorp's managed service offering. It eliminates the need for unnecessary tooling and documentation for practitioners, teams, and organizations to use Terraform in production.</ProductsSectionDescription>
            <ProductsSectionDescription>Provision infrastructure in a remote environment that is optimized for the Terraform workflow.</ProductsSectionDescription>
            <ProductsNavLink className="mt-8 block flex items-center justify-start transition-all w-[270px] hover:w-[275px]">
                Learn how to use Terraform Cloud
                <BsArrowRightShort size={26} className="ml-auto" />
            </ProductsNavLink>
        </div>
    )
}

export default memo(Intro)