// internal modules
import ProductsNavbar from 'components/organisms/ProductsNavbar'
import ProductsHero from 'components/organisms/ProductsTerraform/Hero'
import ProductsIntro from 'components/organisms/ProductsTerraform/Intro'
import ProductsHowItWork from 'components/organisms/ProductsTerraform/HowItWork'
import ProductsScaleTeams from 'components/organisms/ProductsTerraform/ScaleTeams'

const ProductsTerraform = () => {

    return (
        <main>
            <ProductsNavbar />
            <ProductsHero />
            <ProductsIntro />
            <ProductsHowItWork />
            <ProductsScaleTeams />
        </main>
    )
}

export default ProductsTerraform