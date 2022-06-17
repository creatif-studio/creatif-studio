import ProductsContainer from 'components/atoms/ProductsContainer'
import ProductsNavLink from 'components/atoms/ProductsNavLink'
import { memo } from 'react'

const Footer = () => {
    return (
        <ProductsContainer classNameCard="mb-12 grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-wrap md:col-span-2">
                <ProductsNavLink className="mr-3 mt-3 text-gray-500 font-normal text-xs">
                    Terms of Service
                </ProductsNavLink>
                <ProductsNavLink className="mr-3 mt-3 text-gray-500 font-normal text-xs">
                    SLA
                </ProductsNavLink>
                <ProductsNavLink className="mr-3 mt-3 text-gray-500 font-normal text-xs">
                    Shared Responsibility Model
                </ProductsNavLink>
                <ProductsNavLink className="mr-3 mt-3 text-gray-500 font-normal text-xs">
                    Model
                </ProductsNavLink>
                <ProductsNavLink className="mr-3 mt-3 text-gray-500 font-normal text-xs">
                    Privacy
                </ProductsNavLink>
                <ProductsNavLink className="mr-3 mt-3 text-gray-500 font-normal text-xs">
                    Security
                </ProductsNavLink>
                <ProductsNavLink className="mr-3 mt-3 text-gray-500 font-normal text-xs">
                    Press Kit
                </ProductsNavLink>
                <ProductsNavLink className="mr-3 mt-3 text-gray-500 font-normal text-xs">
                    Consent Manager
                </ProductsNavLink>
            </div>
            <p className="m-0 p-0 mt-12 text-xs text-gray-500 md:mt-3 md:ml-auto">©2021 HashiCorp, Inc. All rights reserved</p>
        </ProductsContainer>
    )
}

export default memo(Footer)