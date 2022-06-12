// core modules
import { memo } from 'react'
import Link from 'next/link'
// third party modules
import clsx from 'clsx'

const ProductsLink = ({ 
    children,
    className, 
    href = "#", 
    classNameActive,
    classNameOverrideSize,
    classNameOverrideWidth,
    classNameOverrideWeight,
}) => {
    return (
        <Link href={href}>
            <a 
                className={clsx(
                    className,
                    classNameActive,
                    classNameOverrideWidth ?? "w-fit",
                    classNameOverrideSize ?? "text-sm",
                    classNameOverrideWeight ?? "font-medium",
                    "outline-none block",
                )}
            >{children}</a>
        </Link>
    )
}

export default memo(ProductsLink)