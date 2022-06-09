// internal modules
import ProductsNavbar from 'components/organisms/ProductsNavbar'
import ProductsHero from 'components/organisms/ProductsTerraform/Hero'
import ProductsIntro from 'components/organisms/ProductsTerraform/Intro'
import ProductsHowItWork from 'components/organisms/ProductsTerraform/HowItWork'

const ProductsTerraform = () => {

    return (
        <main>
            <ProductsNavbar />
            <ProductsHero />
            <ProductsIntro />
            <ProductsHowItWork />
        </main>
    )
}

export default ProductsTerraform