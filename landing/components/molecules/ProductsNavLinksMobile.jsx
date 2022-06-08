// core modules
import { memo } from 'react'
// third part modules
import clsx from 'clsx'
// internal modules
import ProductsNavLink from 'components/atoms/ProductsNavLink'
import ProductsNavLinkButton from 'components/atoms/ProductsNavLinkButton'

const ProductsNavLinksMobile = ({ shouldBeShow = false, className }) => {
    return (
        <section className={clsx(shouldBeShow ? 'flex' : 'hidden', className, 'flex-col fixed inset-0 bg-white z-40 pt-16 px-6 md:items-center lg:hidden')}>
            <ProductsNavLink href="/" className="mt-7">
                Pricing
            </ProductsNavLink>
            <ProductsNavLink href="/" className="mt-6">
                Documentation
            </ProductsNavLink>
            <ProductsNavLink href="/" className="mt-6">
                Business
            </ProductsNavLink>
            <hr className='w-full divide-y border-gray-300 mt-6' />
            <ProductsNavLink href="/" className="text-base mt-5">
                Sign In
            </ProductsNavLink>
            <ProductsNavLinkButton variant="primary" href="/">
                Try Terraform Cloud
            </ProductsNavLinkButton>
        </section>
    )
}

export default memo(ProductsNavLinksMobile)