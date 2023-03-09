// core modules
import { memo, useMemo } from 'react'
// third party modules
import clsx from 'clsx'
// internal modules
import ProductsLink from './ProductsLink'

const ProductsLinkButton = ({ 
    variant,
    children,
    className, 
    href = "#", 
    classNameOverrideSize,
    classNameOverrideColor,
    classNameOverrideWidth,
    classNameOverrideWeight,
    classNameOverridePadding,
    classNameOverrideBackground,
}) => {
    const variantClassName = useMemo(() => {
        if(variant === 'primary') return {
            className: 'border border-purple-700',
            classNameBackground: 'bg-purple-700',
            classNameColor: 'text-white'
        }
        if(variant === 'secondary') return {
            className: 'border border-gray-300 transition hover:bg-gray-300 ',
            classNameBackground: 'bg-white',
            classNameColor: 'text-gray-900',
        }
        return {
            className: '',
            classNameBackground: 'bg-black',
            classNameColor: 'text-white',
        }
    }, [variant])
    
    return (
        <ProductsLink
            href={href}
            className={clsx(
                className,
                classNameOverrideWidth,
                variantClassName.className,
                classNameOverridePadding ?? "p-3",
                classNameOverrideColor ?? variantClassName.classNameColor,
                classNameOverrideBackground ?? variantClassName.classNameBackground,
            )}
            classNameOverrideSize={classNameOverrideSize}
            classNameOverrideWeight={classNameOverrideWeight}
        >
            { children }
        </ProductsLink>
    )
}

export default memo(ProductsLinkButton)