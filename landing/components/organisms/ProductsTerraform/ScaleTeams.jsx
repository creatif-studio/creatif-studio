// core modules
import ProductsSectionDescription from 'components/atoms/ProductsSectionDescription'
import ProductsSectionTitle from 'components/atoms/ProductsSectionTitle'
import { memo } from 'react'
import Image from 'next/image'
import { PRODUCTS_SCALE_TEAMS_INFRASTRUCTURE, PRODUCTS_SCALE_TEAMS_INTEGRATIONS, PRODUCTS_SCALE_TEAMS_ORGANIZATION } from 'assets/images'
import ScaleTeamWork from './ScaleTeamWork'
import { teamWorkInfrastructureData, teamWorkIntegrationsData, teamWorkOrganizationData } from 'utils/constants/products/terraform-content'

const ScaleTeams = () => {
    return (
        <section className="mt-32">
            <div className="max-w-[750px] mx-auto">
                <ProductsSectionTitle className="text-center text-4xl md:text-4xl lg:text-5xl lg:font-bold">Scale with your team</ProductsSectionTitle>
                <ProductsSectionDescription className='text-center'>Provision infrastructure securely and reliably in the cloud with free remote state storage. As you scale, add workspaces to break up monolithic infrastructure or manage more projects. </ProductsSectionDescription>
            </div>
            <ScaleTeamWork
                Title={<><span className="text-purple-400">Build</span> infrastructure remotely with your team</>}
                Description="Collaborate in a remote and SOC2 compliant environment."
                Image={<Image src={PRODUCTS_SCALE_TEAMS_INFRASTRUCTURE} className="xl:-mb-3 block" />}
                cardData={teamWorkInfrastructureData}
            />
            <ScaleTeamWork
                Title={<><span className="text-purple-400">Standardize</span> best practices across your organization.</>}
                Description="Help your team remain secure and compliant every time they make a change to infrastructure."
                Image={<Image src={PRODUCTS_SCALE_TEAMS_ORGANIZATION} className="xl:-mb-3 block" />}
                cardData={teamWorkOrganizationData}
                imageClassName="xl:-mt-80"
            />
            <ScaleTeamWork
                Title={<><span className="text-purple-400">Innovate</span> by integrating Terraform into your existing CI/CD pipeline.</>}
                Description="Automate Terraform Cloud functionality into the workflows your team uses everyday."
                Image={<Image src={PRODUCTS_SCALE_TEAMS_INTEGRATIONS} className="xl:-mb-3 block" />}
                cardData={teamWorkIntegrationsData}
                imageClassName="xl:-mt-60"
            />
        </section>
    )
}

export default memo(ScaleTeams)