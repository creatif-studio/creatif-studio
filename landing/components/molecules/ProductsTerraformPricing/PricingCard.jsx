// core modules
import { memo } from 'react'
// third party modules
import clsx from 'clsx'
// internal modules
import ProductsLinkButton from 'components/atoms/ProductsLinkButton'
import ProductsSectionSubtitle from 'components/atoms/ProductsSectionSubtitle'
import ProductsSectionDescription from 'components/atoms/ProductsSectionDescription'

const PricingCard = ({
    Title,
    Pricing,
    Support,
    className,
    featuresItems,
    isForBusiness,
    FeaturesTitle,
    buttonHref = "#",
}) => {
    return (
        <section className={clsx(className, "relative bg-[#fafafa] border bg-white border-gray-200 py-6 px-8 pb-12")}>
            <div className="top-0 left-0 absolute z-[1] w-full bg-white min-h-[120px] md:min-h-[170px] lg:min-h-[150px] xl:min-h-[110px]" />
            <section className="max-w-[260px] w-fit mx-auto">
                <section className='min-h-[120px] z-[9] relative md:min-h-[170px] lg:min-h-[150px] xl:min-h-[110px]'>
                    <ProductsSectionSubtitle>{ Title }</ProductsSectionSubtitle>
                    <ProductsSectionDescription 
                        classNameOverrideMargin="mt-4"
                        classNameOverrideSize="text-xs"
                        classNameOverrideColor="text-black"
                        className={clsx(!Pricing && 'hidden md:block',"tracking-widest font-normal")}
                    >{Pricing}</ProductsSectionDescription>
                </section>
                <section className="md:min-h-[260px] lg:min-h-[230px]">
                    <ProductsSectionDescription 
                        classNameOverrideMargin='mt-5'
                        classNameOverrideSize="text-xs"
                        classNameOverrideColor="text-black"
                        className="font-bold uppercase tracking-wider" 
                    >{FeaturesTitle}</ProductsSectionDescription>
                    {
                        Array.isArray(featuresItems) && featuresItems.map((Item, i) => (
                            <ProductsSectionDescription 
                                key={i}
                                classNameOverrideSize="text-sm"
                                classNameOverrideMargin="mt-4"
                                classNameOverrideColor="text-gray-500"
                                className="tracking-wide" 
                            >{ Item }</ProductsSectionDescription>
                        ))
                    }
                </section>
                <section className='md:min-h-[130px]'>
                    <ProductsSectionDescription 
                        classNameOverrideMargin="mt-12"
                        classNameOverrideSize="text-xs"
                        classNameOverrideColor="text-black"
                        className="font-bold uppercase tracking-wider" 
                    >Support</ProductsSectionDescription>
                    <ProductsSectionDescription 
                        classNameOverrideSize="text-sm"
                        classNameOverrideMargin="mt-4"
                        classNameOverrideColor="text-gray-500"
                        className="tracking-wide" 
                    >{ Support }</ProductsSectionDescription>
                </section>
                {
                    isForBusiness
                        ? (
                            <ProductsLinkButton 
                                href={buttonHref}
                                classNameOverrideColor="text-black" 
                                classNameOverridePadding="px-6 py-4" 
                                classNameOverrideBackground="bg-white" 
                                className="mt-12 md:mt-0 rounded transition border border-gray-300 hover:bg-gray-300"
                            >Contact sales</ProductsLinkButton>
                        )
                        : (
                            <ProductsLinkButton 
                                classNameOverridePadding="px-6 py-4" 
                                className="mt-12 md:mt-0 rounded"
                                href={buttonHref}
                            >Sign Up</ProductsLinkButton>
                        )
                }
            </section>
        </section>
    )
}

export default memo(PricingCard)