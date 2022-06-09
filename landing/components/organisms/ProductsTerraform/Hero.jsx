// core modules
import { memo } from 'react'
// internal modules
import HeroSection from 'components/molecules/ProductsTerraform/Hero'
import HeroImage from 'components/molecules/ProductsTerraform/HeroImage'

const Hero = () => {
    return (
        <section className='mt-10 bg-products-terraform-hero translate-y-[10%] opacity-0 animate-[move-to-top_0.5s_forwards_0.3s] overflow-hidden'>
            <HeroSection />
            <HeroImage />
        </section>
    )
}

export default memo(Hero)