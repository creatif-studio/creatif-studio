// core modules
import { memo } from 'react'
// third party modules
import clsx from 'clsx'

const ProductsContainer = ({ 
    children, 
    classNameCard,
    classNameContainer,
    classNameExtendContainerWidth,
    classNameOverrideContainerWidth,
    classNameExtendContainerPaddingHorizontal,
    classNameOverrideContainerPaddingHorizontal,
}) => {
    return (
        <section className={clsx(
            classNameContainer,
            classNameExtendContainerPaddingHorizontal,
            classNameOverrideContainerPaddingHorizontal 
                ? classNameOverrideContainerPaddingHorizontal
                : "px-7 sm:px-16 md:px-8 lg:px-10",
            classNameExtendContainerWidth,
            classNameOverrideContainerWidth
                ? classNameOverrideContainerWidth
                : "sm:max-w-[95vw] 2xl:max-w-container md:max-w-[95vw]",
            "mx-auto"
        )}>
            <section className={classNameCard}>
                { children }
            </section>
        </section>
    )
}

export default memo(ProductsContainer)