// core modules
import { memo } from 'react'
// third party modules
import clsx from 'clsx'
// internal modules
import ProductsNavLink from 'components/atoms/ProductsNavLink'

const NavBottomCard = ({ marginClassName, Items, Title }) => {
    return (
        <section className={clsx(marginClassName ?? 'mt-12', 'flex flex-col')}>
            <h2 className='uppercase text-sm font-semibold tracking-wider mb-2'>{ Title }</h2>
            {
                Array.isArray(Items) && Items.map(({child, href}, i) => (
                    <ProductsNavLink className='text-sm mt-3 font-light text-zinc-900' href={href} key={i}>{ child }</ProductsNavLink>
                ))
            }
        </section>
    )
}

export default memo(NavBottomCard)