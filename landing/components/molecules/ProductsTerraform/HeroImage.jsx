// core modules
import { memo } from 'react'
import Image from 'next/image'
// assets
import assets from 'assets'

const HeroImage = () => {
    return (
        <section className="mt-16 max-w-[1200px] mx-auto overflow-hidden -mb-[6px]">
            <Image src={assets.images.PRODUCTS_TERRAFORM_HERO} />
        </section>
    )
}

export default memo(HeroImage)