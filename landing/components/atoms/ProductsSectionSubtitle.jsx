// core modules
import { memo } from 'react'
// third party modules
import clsx from 'clsx'

const ProductsSectionSubtitle = ({ className, children, baseFontSizeClassName }) => {
    return (
        <h2 className={clsx(className, baseFontSizeClassName ? baseFontSizeClassName : 'text-xl', 'font-semibold leading-relaxed lg:text-2xl')}>{ children }</h2>
    )
}

export default memo(ProductsSectionSubtitle)