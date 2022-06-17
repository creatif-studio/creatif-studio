// core modules
import { memo } from 'react'
import { useRouter } from 'next/router'
// third party modules
import clsx from 'clsx'
// internal modules
import ProductsLink from 'components/atoms/ProductsLink'

const ProductsNavLinksDesktop = ({ className }) => {
    const { pathname } = useRouter()

    return (
        <section className={clsx(className, 'hidden items-start ml-24 mt-2 lg:flex xl:justify-center xl:absolute xl:left-0 xl:right-0 xl:ml-0')}>
            <ProductsLink 
                href="/products/terraform/pricing" 
                className="pb-1 xl:-ml-8"
                classNameActive={pathname === '/products/terraform/pricing' && 'border-b-[2px] border-black'}
            >
                Pricing
            </ProductsLink>
            <ProductsLink 
                href="/" 
                className="pb-1 ml-9"
            >
                Documentation
            </ProductsLink>
            <ProductsLink 
                href="/" 
                className="pb-1 ml-9"
            >
                Business
            </ProductsLink>
        </section>
    )
}

export default memo(ProductsNavLinksDesktop)