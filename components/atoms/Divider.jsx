// core modules
import { memo } from 'react'
// third party modules
import clsx from 'clsx'
// internal modules
import ProductsContainer from './ProductsContainer'

const Divider = ({ classNameOverrideColor, className, dividerType, classNameOverrideMargin }) => {
    return (
        <ProductsContainer>
            <hr className={
                clsx(
                    className,
                    classNameOverrideMargin ?? "mt-22 mb-10",
                    classNameOverrideColor ?? "border-gray-300",
                    dividerType === "Y" ? "divider-y" : "divider-x",
                )
            } />
        </ProductsContainer>
    )
}

export default memo(Divider)