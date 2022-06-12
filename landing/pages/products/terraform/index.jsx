// internal modules
import ProductsDivider from 'components/atoms/Divider'
import ProductsNavbar from 'components/organisms/ProductsNavbar'
import NavbarTriggerProvider from 'context/NavbarTriggerProvider'
import ProductsContainer from 'components/atoms/ProductsContainer'
import ProductsHero from 'components/organisms/ProductsTerraform/Hero'
import ProductsIntro from 'components/organisms/ProductsTerraform/Intro'
import ProductsFooter from 'components/organisms/ProductsTerraform/Footer'
import ProductsHowItWork from 'components/organisms/ProductsTerraform/HowItWork'
import ProductsNavBottom from 'components/organisms/ProductsTerraform/NavBottom'
import ProductsGetStarted from 'components/organisms/ProductsTerraform/GetStarted'
import ProductsScaleTeams from 'components/organisms/ProductsTerraform/ScaleTeams'

const ProductsTerraform = () => {

    return (
        <NavbarTriggerProvider>
            <main>
                <ProductsNavbar />
                <ProductsHero />
                <ProductsIntro />
                <ProductsContainer />
                <ProductsHowItWork />
                <ProductsScaleTeams />
                <ProductsGetStarted />
                <ProductsDivider />
                <ProductsNavBottom />
                <ProductsDivider />
                <ProductsFooter />
            </main>
        </NavbarTriggerProvider>
    )
}

export default ProductsTerraform