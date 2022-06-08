// core modules
import Image from 'next/image'
import { useState, useCallback, useEffect } from 'react'
// third party modules
import { BsList, BsXLg } from 'react-icons/bs/index'
// internal modules
import ProductsNavLink from 'components/atoms/ProductsNavLink'
import ProductsNavLinksMobile from 'components/molecules/ProductsNavLinksMobile'
import ProductsNavLinksDesktop from 'components/molecules/ProductsNavLinksDesktop'
// assets
import assets from 'assets'

const ProductsNavbar = () => {
    const [isShowMobileNav, setShowMobileNav] = useState(false)
    const handleShowMobileNav = useCallback(() => setShowMobileNav(prev => !prev), [setShowMobileNav])

    useEffect(() => {
        if(isShowMobileNav) document.body.classList.add('overflow-hidden')
        else document.body.classList.remove('overflow-hidden')

    }, [isShowMobileNav])

    return (
        <>
            <nav className='w-full px-6 py-4 flex justify-between items-center bg-white z-50 relative md:px-8 md:py-5 lg:justify-start'>
                <ProductsNavLink href="/" className="z-50">
                    <Image src={assets.images.TERRAFORM_CLOUD} />
                </ProductsNavLink>
                <ProductsNavLinksDesktop />
                <button onClick={handleShowMobileNav} className="lg:hidden">
                    {
                        isShowMobileNav
                            ? <BsXLg size={18} />
                            : <BsList size={26} />
                    }
                </button>
            </nav>
            <ProductsNavLinksMobile shouldBeShow={isShowMobileNav} />
        </>
    )
}

export default ProductsNavbar