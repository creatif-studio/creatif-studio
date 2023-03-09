// internal modules
import ProductsSectionSubtitle from 'components/atoms/ProductsSectionSubtitle'

const IntroCardTitle = ({ children, className, classNameOverrideBaseSize }) => {
    return (
        <ProductsSectionSubtitle 
            className={className}
            classNameOverrideResponsiveWeight="lg:font-semibold"
            classNameOverrideBaseSize={classNameOverrideBaseSize} 
        >{children}</ProductsSectionSubtitle>
    )
}

export default IntroCardTitle