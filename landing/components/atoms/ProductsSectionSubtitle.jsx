// core modules
import { memo } from 'react'
// third party modules
import clsx from 'clsx'

const ProductsSectionSubtitle = ({ className, children }) => {
    return (
        <h2 className={clsx(className, 'font-semibold text-xl leading-relaxed lg:text-2xl')}>{ children }</h2>
    )
}

export default memo(ProductsSectionSubtitle)