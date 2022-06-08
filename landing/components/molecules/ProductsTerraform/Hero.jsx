// core modules
import { memo } from 'react'
// internal modules
import ProductsNavLinkButton from 'components/atoms/ProductsNavLinkButton'

const Hero = () => {
    return (
        <section className="mt-16 px-6 mx-auto sm:w-[600px] md:w-11/12 lg:w-[870px]">
            <h1 className='text-4xl font-semibold text-center leading-tight md:font-bold lg:text-5xl lg:font-bold lg:leading-snug'>Automate infrastructure provisioning at any scale.</h1>
            <p className='mt-7 text-center text-base leading-loose text-gray-800'>Terraform Cloud enables infrastructure automation for provisioning, compliance, and management of any cloud, data center, and service.</p>
            <section className="flex mt-7 flex-col w-full sm:flex-row sm:justify-center">
                <ProductsNavLinkButton href="#" variant="primary" className="mx-auto py-3 sm:m-0">
                    Try Terraform Cloud
                </ProductsNavLinkButton>
                <ProductsNavLinkButton href="#" className="mx-auto py-3 sm:m-0 sm:ml-4">
                    Terraform Cloud Business
                </ProductsNavLinkButton>
            </section>
        </section>
    )
}

export default memo(Hero)