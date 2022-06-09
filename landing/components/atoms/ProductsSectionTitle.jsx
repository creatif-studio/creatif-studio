// core modules
import {memo} from 'react'
// third party modules
import clsx from 'clsx'

const ProductsSectionTitle = ({ children, className }) => {
    return (
        <h1 className={clsx(className, 'font-semibold text-3xl leading-snug md:text-4xl lg:font-bold xl:font-4.5xl')}>{children}</h1>
    )
}

export default memo(ProductsSectionTitle)