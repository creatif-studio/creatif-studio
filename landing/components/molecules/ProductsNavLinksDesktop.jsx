// core modules
import { memo } from 'react'
// third party modules
import clsx from 'clsx'
// internal modules
import ProductsNavLink from 'components/atoms/ProductsNavLink'

const ProductsNavLinksDesktop = ({ className }) => {
    return (
        <section className={clsx(className, 'hidden items-center ml-24 mt-2 lg:flex xl:justify-center xl:absolute xl:left-0 xl:right-0 xl:ml-0')}>
            <ProductsNavLink href="/" className="xl:-ml-8">
                Pricing
            </ProductsNavLink>
            <ProductsNavLink href="/" className="ml-9">
                Documentation
            </ProductsNavLink>
            <ProductsNavLink href="/" className="ml-9">
                Business
            </ProductsNavLink>
        </section>
    )
}

export default memo(ProductsNavLinksDesktop)