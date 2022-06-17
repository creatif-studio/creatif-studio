// core modules
import { memo } from 'react'
// third party modules
import clsx from 'clsx'

const ProductsSectionDescription = ({ 
    children, 
    className,
    classNameOverrideSize,
    classNameOverrideColor,
    classNameOverrideMargin,
    classNameOverrideLineHeight,
}) => {
    return (
        <p 
            className={clsx(
                className,
                classNameOverrideMargin ?? 'mt-8',
                classNameOverrideSize ?? 'text-base',
                classNameOverrideColor ?? 'text-gray-600 ',
                classNameOverrideLineHeight ?? 'leading-loose',
            )}
        >{children}</p>
    )
}

export default memo(ProductsSectionDescription)