// core modules
import { memo } from 'react'
import Link from 'next/link'
// third party modules
import clsx from 'clsx'

const ProductsNavLink = ({ href = "#", className, children }) => {
    return (
        <Link href={href}>
            <a className={clsx(className, "text-sm font-medium outline-none")}>{children}</a>
        </Link>
    )
}

export default memo(ProductsNavLink)