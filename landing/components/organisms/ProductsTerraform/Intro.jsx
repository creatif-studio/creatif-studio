// core modules
import { memo } from 'react'
// third party modules
import { BsEye, BsFullscreen, BsLock } from 'react-icons/bs'
// internal modules
import IntroMain from 'components/molecules/ProductsTerraform/Intro'
import IntroCard from 'components/molecules/ProductsTerraform/IntroCard'

const Intro = () => {
    return (
        <div className="mt-24 grid gap-4 container md:grid-rows-2 md:grid-flow-col">
            <IntroMain />
            <IntroCard className="row-start-2 md:row-start-1 md:col-span-2">
                <IntroCard.Icon>
                    <BsEye className='fill-purple-600 mt-1' size={28} />
                </IntroCard.Icon>
                <IntroCard.Title>Run infrastructure as code remotely</IntroCard.Title>
                <IntroCard.Description>Store state and execute Terraform runs in an SOC2 compliant and reliable environment for free.</IntroCard.Description>
            </IntroCard>
            <IntroCard className="row-start-3 md:row-start-2 md:col-span-2 md:mt-2">
                <IntroCard.Icon>
                    <BsLock className='fill-purple-600 mt-1' size={28} />
                </IntroCard.Icon>
                <IntroCard.Title>Create self-service infrastructure with a private registry</IntroCard.Title>
                <IntroCard.Description>Standardize infrastructure across your provisioning pipelines using your own private registry.</IntroCard.Description>
            </IntroCard>
            <IntroCard className="row-start-4 md:row-start-3 md:col-span-2 ">
                <IntroCard.Icon>
                    <BsFullscreen className='fill-purple-600 mt-1' size={28} />
                </IntroCard.Icon>
                <IntroCard.Title>Achieve multi-cloud compliance and management</IntroCard.Title>
                <IntroCard.Description>Set up permissions and governance features across any resource managed by Terraform. Add capabilities for policy enforcement.</IntroCard.Description>
            </IntroCard>
        </div>
    )
}

export default memo(Intro)