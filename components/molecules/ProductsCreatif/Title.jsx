import { memo } from 'react'
import clsx from 'clsx'
import ProductsSectionTitle from 'components/atoms/ProductsSectionTitle'

const Title = ({ align = "left", children }) => {
    return (
        <ProductsSectionTitle
            className={clsx(align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left")}
            classNameOverrideBaseSize="text-4xl"
            classNameOverrideResponsiveSize="lg:text-5xl"
            classNameOverrideResponsiveWeight="md:font-bold"
            classNameOverrideLineHeight="leading-tight lg:leading-snug"
        >{ children }</ProductsSectionTitle>
    )
}

export default memo(Title)