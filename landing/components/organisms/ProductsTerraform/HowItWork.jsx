// core modules
import { memo } from 'react'
import Image from 'next/image'
// third party modules
import { BsArrowLeftRight, BsLock, BsWatch } from 'react-icons/bs'
// internal modules
import ProductsNavLink from 'components/atoms/ProductsNavLink'
import ProductsSectionTitle from 'components/atoms/ProductsSectionTitle'
import WorkSection from 'components/molecules/ProductsTerraform/WorkSection'
// assets
import { PRODUCTS_TERRAFORM_INFRASTRUCTURE, PRODUCTS_TERRAFORM_ENVIRONMENT, PRODUCTS_TERRAFORM_PLAN } from 'assets/images'

const HowItWork = () => {
    return (
        <section className="mt-32">
            <section className="mt-24 bg-sky-50 pt-22 rounded-xl container md:pr-0 md:pl-8 lg:px-10 xl:pt-32">
                <ProductsSectionTitle className="md:text-5xl">
                    <strong className="font-bold">How It Works</strong>
                </ProductsSectionTitle>
                <WorkSection
                    Title="Define your infrastructure"
                    Description={<>Leverage <strong className="underline">HCL</strong> to define new infrastructure configurations, or manage existing configurations that you've already written.</>}
                    CardIcon={<BsWatch className='fill-purple-600 mt-1' size={25} />}
                    CardTitle="Standardize deployments in less time"
                    CardDescription={<>Author and share custom providers and modules to standardize infrastructure patterns within your organization using a <ProductsNavLink className="text-blue-600">private registry</ProductsNavLink>.</>}
                    Image={<Image src={PRODUCTS_TERRAFORM_INFRASTRUCTURE} />}
                />
                <WorkSection
                    Title="Map your environments"
                    Description={<>Connect your configurations stored locally or in version control to <strong className="underline">workspaces</strong>. A workspace provides everything you need to securely manage a collection of infrastructure for remote provisioning, including remote state storage, permissions, integrations, policies, and more.</>}
                    CardIcon={<BsLock className='fill-purple-600 mt-1' size={25} />}
                    CardTitle="Gain productivity by defining a repeatable process"
                    CardDescription={<>Set up your ideal remote workspaces so that other teams or systems can safely provision infrastructure in automation.</>}
                    Image={<Image src={PRODUCTS_TERRAFORM_ENVIRONMENT} />}
                />
                <WorkSection
                    Title="Plan and provision with confidence"
                    Description={<>Create checks in order for a run to pass. Add functionality into Terraform plans with run tasks, policy as code, or cost estimation.</>}
                    CardIcon={<BsArrowLeftRight className='fill-purple-600 mt-1' size={25} />}
                    CardTitle="Integrate with your existing provisioning pipeline"
                    CardDescription={<>
                        <span>Provision in automation by integrating with your CI/CD pipeline, and send notifications to other systems with each apply.</span>
                        <span className="mt-4 block">When infrastructure changes are applied, your state file will be dynamically updated.</span>
                    </>}
                    Image={<Image src={PRODUCTS_TERRAFORM_PLAN} />}
                />
            </section>
        </section>
    )
}

export default memo(HowItWork)