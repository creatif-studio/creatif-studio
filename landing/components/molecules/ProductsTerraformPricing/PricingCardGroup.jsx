// core modules
import { memo } from 'react'
// internal modules
import ProductsLink from 'components/atoms/ProductsLink'
import PricingCard from 'components/molecules/ProductsTerraformPricing/PricingCard'

const PricingCardGroup = () => {
    return (
        <section className="grid grid-cols-1 mt-14 md:grid-cols-3">
            <PricingCard 
                Title="Free"
                Support="Community Support"
                FeaturesTitle={<>Open source features, plus:</>}
                featuresItems={[
                    "State management",
                    "Remote operations",
                    "Private module registry"
                ]}
            />
            <PricingCard 
                className="border-t-0 border-b-0 md:border-t md:border-b md:border-l-0 md:border-r-0"
                Title={<>Team & Governance</>}
                FeaturesTitle={<>Everything in Free, with options to add:</>}
                Pricing={<>STARTING AT <strong className='text-sm tracking-normal'>$20/user</strong></>}
                Support={<ProductsLink className="text-blue-600" classNameOverrideWeight="font-normal">Bronze Support</ProductsLink>}
                featuresItems={[
                    "Team management",
                    "Sentinel policy as code",
                    "Run tasks",
                    "Policy enforcement",
                ]}
            />
            <PricingCard 
                Title={<>Business</>}
                FeaturesTitle={<>Everything in Team & <br />Governance, plus:</>}
                Support={<ProductsLink className="text-blue-600" classNameOverrideWeight="font-normal">Bronze, Silver, or Gold support</ProductsLink>}
                featuresItems={[
                    "SSO, self-hosted agents, audit logs",
                    "Custom concurrency",
                    "Self-hosted option",
                ]}
                isForBusiness
            />
        </section>
    )
}

export default memo(PricingCardGroup)