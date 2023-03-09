// core modules
import { memo } from 'react'
// internal modules
import { useNavbarTrigger } from 'context/NavbarTriggerProvider'
import ProductsLinkButton from 'components/atoms/ProductsLinkButton'
import ProductsSectionTitle from 'components/atoms/ProductsSectionTitle'
import ProductsSectionDescription from 'components/atoms/ProductsSectionDescription'
import Title from './Title'

const Hero = () => {
    const { triggerElementRef } = useNavbarTrigger()

    return (
        <section className="mt-16 px-6 mx-auto sm:w-[600px] md:w-11/12 lg:w-[870px]" ref={triggerElementRef}>
            <Title align="center">Automate infrastructure provisioning at any scale.</Title>
            <ProductsSectionDescription
                className="text-center mt-7"
                classNameOverrideColor="text-gray-800"
                classNameOverrideLineHeight="leading-loose"
            >CloudBoz Pro enables infrastructure automation for provisioning, compliance, and management of any cloud, data center, and service.</ProductsSectionDescription>
            <section className="flex mt-7 flex-col w-full sm:flex-row sm:justify-center">
                <ProductsLinkButton 
                    href="#" 
                    variant="primary"
                    classNameOverridePadding="py-3 px-6" 
                    className="mx-auto rounded font-semibold sm:m-0"
                >
                    Try CloudBoz Pro
                </ProductsLinkButton>
                <ProductsLinkButton 
                    href="#" 
                    variant="secondary" 
                    classNameOverridePadding="py-3 px-6" 
                    className="mx-auto rounded font-semibold mt-5 sm:m-0 sm:ml-4"
                >
                    CloudBoz Pro Business
                </ProductsLinkButton>
            </section>
        </section>
    )
}

export default memo(Hero)