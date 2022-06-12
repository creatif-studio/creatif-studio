// core modules
import {memo} from 'react'
// third party modules
import clsx from 'clsx'

const ProductsSectionTitle = ({ 
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
                classNameOverrideBaseSize ?? "text-3xl",
                classNameOverrideLineHeight ?? 'leading-snug',
                classNameOverrideBaseWeight ?? "font-semibold",
                classNameOverrideResponsiveWeight ?? "lg:font-bold",
                classNameOverrideResponsiveSize ?? "md:text-4xl xl:text-4.5xl",
                "font-display"
            )}
        >{children}</h1>
    )
}

export default memo(ProductsSectionTitle)
