// core modules
import { memo } from 'react'
// internal modules
import NavBottomCard from 'components/molecules/ProductsTerraform/NavBottomCard'
import ProductsNavLink from 'components/atoms/ProductsNavLink'
import { BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'
import ProductsContainer from 'components/atoms/ProductsContainer'

const NavBottom = () => {
    return (
        <ProductsContainer classNameCard="grid grid-cols-1 items-start justify-between md:grid-cols-4 md:gap-4">
            <NavBottomCard
                Title="Learn about HCP"
                marginClassName="mt-12 md:mt-0"
                Items={[
                    {
                        href: '#',
                        child: 'Blog'
                    },
                    {
                        href: '#',
                        child: 'Press Release'
                    },
                ]}
            />
            <NavBottomCard
                Title="Resources"
                marginClassName="mt-12 md:mt-0"
                Items={[
                    {
                        href: '#',
                        child: 'Tutorials'
                    },
                    {
                        href: '#',
                        child: 'Documentation'
                    },
                ]}
            />
            <NavBottomCard
                Title="Help"
                marginClassName="mt-12 md:mt-0"
                Items={[
                    {
                        href: '#',
                        child: <div>Community <span className='ml-3 uppercase bg-black text-white font-semibold p-1 text-sm rounded'>NEW</span></div>
                    },
                    {
                        href: '#',
                        child: 'Support'
                    },

                    {
                        href: '#',
                        child: 'Contact Us'
                    },
                ]}
            />
            <section className="flex items-center mt-12 md:mt-0">
                <ProductsNavLink className='mr-3'>
                    <BsTwitter size={30} />
                </ProductsNavLink>
                <ProductsNavLink className='mx-3'>
                    <BsLinkedin size={30} />
                </ProductsNavLink>
                <ProductsNavLink className='mx-3'>
                    <BsYoutube size={30} />
                </ProductsNavLink>
            </section>
        </ProductsContainer>
    )
}

export default memo(NavBottom)