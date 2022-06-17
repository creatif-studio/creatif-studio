// core modules
import { memo } from 'react'
// third party modules
import clsx from 'clsx'
// internal modules
import IntroCard from 'components/molecules/ProductsTerraform/IntroCard'
import ProductsSectionSubtitle from 'components/atoms/ProductsSectionSubtitle'
import ProductsSectionDescription from 'components/atoms/ProductsSectionDescription'
import ProductsContainer from 'components/atoms/ProductsContainer'

const ScaleTeamWork = ({ Title, Description, Image, cardData, className, imageClassName }) => {
    return (
        <ProductsContainer
            classNameContainer={clsx(className, "mt-24 bg-zinc-900 pt-16 pb-0 rounded-xl")}
            classNameOverrideContainerPaddingHorizontal="md:pl-0 lg:px-10 lg:pl-0 xl:pt-22 xl:pb-0"
        >
            <section className="ml-7 lg:ml-10 xl:flex xl:justify-between">
                <section className='w-9/12 md:w-10/12 lg:w-7/12 lg:pr-22'>
                    <ProductsSectionSubtitle className="text-white text-3xl leading-tight md:font-bold lg:text-4xl xl:text-4.5xl xl:leading-snug">{Title}</ProductsSectionSubtitle>
                    <ProductsSectionDescription className="text-gray-200">{Description}</ProductsSectionDescription>
                </section>
                <section className="grid grid-cols-2 mt-8 gap-4 md:w-10/12 lg:grid-cols-3 lg:w-11/12 xl:grid-cols-2 xl:w-5/12">
                    {
                        Array.isArray(cardData) && cardData.map(({ title, description }, i) => (
                            <IntroCard className="p-0 mr-5 md:mr-5 lg:mr-5 xl:mr-5" key={i}>
                                <IntroCard.Title classNameOverrideBaseSize="text-base" className="text-white font-bold md:text-base lg:text-base">{title}</IntroCard.Title>
                                <IntroCard.Description className="text-gray-200">{description}</IntroCard.Description>
                            </IntroCard>
                        ))
                    }
                </section>
            </section>
            <section className={clsx(imageClassName, 'mt-5 relative -bottom-2')}>
                { Image }
            </section>
        </ProductsContainer>
    )
}

export default memo(ScaleTeamWork)