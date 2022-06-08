// core modules
import { memo } from 'react'
// third party modules
import clsx from 'clsx'
// internal modules
import ProductsNavLink from './ProductsNavLink'

const ProductsNavLinkButton = ({ variant, href = '/', children, className }) => {
    return (
        <ProductsNavLink href={href} className={clsx(variant === 'primary' ? 'border border-purple-700 bg-purple-700 text-white' : 'border border-gray-300 bg-white text-gray-900', className,  'text-base rounded w-fit py-2 px-5 mt-5')}>
            { children }
        </ProductsNavLink>
    )
}

export default memo(ProductsNavLinkButton)    