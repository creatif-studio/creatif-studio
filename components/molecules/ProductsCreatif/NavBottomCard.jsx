// core modules
import { memo } from 'react'
// third party modules
import clsx from 'clsx'
// internal modules
import ProductsLink from 'components/atoms/ProductsLink'

const NavBottomCard = ({ marginClassName, Items, Title }) => {
    return (
        <section className={clsx(marginClassName ?? 'mt-12', 'flex flex-col')}>
            <h2 className='uppercase text-xs font-semibold tracking-widest mb-2'>{ Title }</h2>
            {
                Array.isArray(Items) && Items.map(({child, href}, i) => (
                    <ProductsLink 
                        classNameOverrideSize="text-xs"
                        className='mt-3 font-light text-black tracking-wider' 
                        href={href} 
                        key={i}
                    >{ child }</ProductsLink>
                ))
            }
        </section>
    )
}

export default memo(NavBottomCard)