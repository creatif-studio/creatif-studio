// core modules
import { memo } from 'react'
// internal modules
import ProductsLink from 'components/atoms/ProductsLink'

const FaqNav = () => {
    return (
        <section className="w-full border-b border-gray-300 mt-32">
            <ProductsLink 
                className="tracking-wide"
                classNameOverrideSize="text-sm"
                classNameActive="pb-5 border-b-[3px] border-black"
            >Usage</ProductsLink>
        </section>
    )
}

export default memo(FaqNav)