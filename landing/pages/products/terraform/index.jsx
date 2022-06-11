// internal modules
import ProductsNavbar from 'components/organisms/ProductsNavbar'
import ProductsHero from 'components/organisms/ProductsTerraform/Hero'
import ProductsIntro from 'components/organisms/ProductsTerraform/Intro'
import ProductsHowItWork from 'components/organisms/ProductsTerraform/HowItWork'
import ProductsScaleTeams from 'components/organisms/ProductsTerraform/ScaleTeams'
import ProductsGetStarted from 'components/organisms/ProductsTerraform/GetStarted'
import ProductsNavBottom from 'components/organisms/ProductsTerraform/NavBottom'
import ProductsFooter from 'components/organisms/ProductsTerraform/Footer'

const ProductsTerraform = () => {

    return (
        <main>
            <ProductsNavbar />
            <ProductsHero />
            <ProductsIntro />
            <ProductsHowItWork />
            <ProductsScaleTeams />
            <ProductsGetStarted />
            <hr className="divider-y mt-22 mb-10 border-gray-300 w-full container" />
            <ProductsNavBottom />
            <hr className="divider-y mt-22 mb-10 border-gray-300 w-full container" />
            <ProductsFooter />
        </main>
    )
}

export default ProductsTerraform