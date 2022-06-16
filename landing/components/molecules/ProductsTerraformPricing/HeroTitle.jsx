// core modules
import { memo } from 'react'
// internal modules
import ProductsSectionTitle from 'components/atoms/ProductsSectionTitle'
import { useNavbarTrigger } from 'context/NavbarTriggerProvider'

const HeroTitle = () => {
    const { triggerElementRef } = useNavbarTrigger()

    return (
        <section className="pt-32" ref={triggerElementRef}>
            <ProductsSectionTitle 
                className="text-center"
            >CloudBoz Pro Pricing</ProductsSectionTitle>
        </section>
    )
}

export default memo(HeroTitle)