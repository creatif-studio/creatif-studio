// core modules
import {memo} from 'react'
// third party modules
import clsx from 'clsx'

const ProductsSectionSubtitle = ({ 
    children, 
    className, 
    classNameOverrideBaseSize ,
    classNameOverrideBaseWeight, 
    classNameOverrideLineHeight, 
    classNameOverrideResponsiveSize ,
    classNameOverrideResponsiveWeight, 
}) => {
    return (
        <h1 
            className={clsx(
                className,
                classNameOverrideBaseSize ?? 'text-xl',
                classNameOverrideLineHeight ?? 'leading-relaxed',
                classNameOverrideBaseWeight ?? "font-semibold",
                classNameOverrideResponsiveWeight ?? "lg:font-bold",
                classNameOverrideResponsiveSize ?? "lg:text-2xl",
                "font-display"
            )}
        >{children}</h1>
    )
}

export default memo(ProductsSectionSubtitle)
