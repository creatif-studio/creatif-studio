// core modules
import { memo } from 'react'
// third party modules
import clsx from 'clsx'

const ProductsSectionDescription = ({ children, className }) => {
    return (
        <p className={clsx(className, 'text-gray-600 mt-8 leading-loose')}>{children}</p>
    )
}

export default memo(ProductsSectionDescription)