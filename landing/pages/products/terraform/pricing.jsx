// core modules
import NavbarTriggerProvider from 'context/NavbarTriggerProvider'   
import ProductsTerraformPricingDivider from 'components/atoms/Divider'
import ProductsTerraformPricingNavbar from 'components/organisms/ProductsNavbar'
import ProductsTerraformPricingFooter from 'components/organisms/ProductsTerraform/Footer'
import ProductsTerraformPricingFaq from 'components/organisms/ProductsTerraformPricing/Faq'
import ProductsTerraformPricingHero from 'components/organisms/ProductsTerraformPricing/Hero'     
import ProductsTerraformPricingNavBottom from 'components/organisms/ProductsTerraform/NavBottom'

const ProductsTerraformPricing = () => {

    return (
        <NavbarTriggerProvider>
            <main>
                <ProductsTerraformPricingNavbar />
                <ProductsTerraformPricingHero />
                <ProductsTerraformPricingFaq />
                <ProductsTerraformPricingDivider classNameOverrideMargin="mt-36 mb-10" />
                <ProductsTerraformPricingNavBottom />
                <ProductsTerraformPricingDivider />
                <ProductsTerraformPricingFooter />
            </main>
        </NavbarTriggerProvider>
    )
}

export default ProductsTerraformPricing