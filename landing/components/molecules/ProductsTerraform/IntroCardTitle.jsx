// internal modules
import ProductsSectionSubtitle from 'components/atoms/ProductsSectionSubtitle'

const IntroCardTitle = ({ children, className }) => {
    return (
        <ProductsSectionSubtitle className={className}>{children}</ProductsSectionSubtitle>
    )
}

export default IntroCardTitle