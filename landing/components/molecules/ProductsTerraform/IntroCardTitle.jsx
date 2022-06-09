// internal modules
import ProductsSectionSubtitle from 'components/atoms/ProductsSectionSubtitle'

const IntroCardTitle = ({ children, className, baseFontSizeClassName }) => {
    return (
        <ProductsSectionSubtitle baseFontSizeClassName={baseFontSizeClassName} className={className}>{children}</ProductsSectionSubtitle>
    )
}

export default IntroCardTitle