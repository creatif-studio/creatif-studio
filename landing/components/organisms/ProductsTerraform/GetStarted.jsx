import ProductsNavLinkButton from 'components/atoms/ProductsNavLinkButton'
import ProductsNavLink from 'components/atoms/ProductsNavLink'
import ProductsSectionDescription from 'components/atoms/ProductsSectionDescription'
import ProductsSectionTitle from 'components/atoms/ProductsSectionTitle'
import { memo } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

const GetStarted = () => {
    return (
        <div className="container mt-44 flex flex-col sm:px-5 md:flex-row md:justify-between lg:px-10">
            <section className='md:w-4/12 lg:w-3/12'>
                <ProductsSectionTitle>Get started with CloudBoz Pro</ProductsSectionTitle>
            </section>
            <section className='mt-5 md:mt-0 md:w-6/12 lg:w-7/12'>
                <ProductsSectionDescription className="text-gray-700 sm:text-lg md:mt-0">Get started with CloudBoz Pro and start collaborating</ProductsSectionDescription>
                <section className="flex flex-wrap mt-5">
                    <ProductsNavLinkButton variant="primary" className="py-3 px-4 block bg-purple-700 mr-3">
                        <span className='text-sm'>Sign up for free</span>
                    </ProductsNavLinkButton>
                    <ProductsNavLink className="mx-3 mt-5 block flex items-center justify-start animate-button-icon relative w-[120px]">
                        Explore Plans
                        <BsArrowRightShort size={26} className="block transition-all icon absolute right-0" />
                    </ProductsNavLink>
                    <ProductsNavLink className="mx-3 mt-5 block flex items-center justify-start animate-button-icon relative w-[135px]">
                        Documentation
                        <BsArrowRightShort size={26} className="block transition-all icon absolute right-0" />
                    </ProductsNavLink>
                </section>
                <section className="border border-gray-300 p-5 mt-10 text-sm text-gray-800 sm:text-base">
                    <p>For larger organizations, learn more about the <ProductsNavLink className="text-purple-600 sm:text-base">CloudBoz Pro Business</ProductsNavLink> tier</p>
                </section>
            </section>
        </div>
    )
}

export default memo(GetStarted)