import { memo, forwardRef } from 'react'

import { Button } from "components/atoms";
import { BsDownload, BsGithub } from "react-icons/bs";
import ProductsLink from 'components/atoms/ProductsLink'

const NavMobileLinks = ({ show }, ref) => {
    return (
        show && (
            <div 
                className={`shadow-xl flex flex-col absolute w-[260px] max-h-[490px] overflow-y-auto p-5 bg-white mt-4 left-[-200px]`}
                ref={ref}
            >
                <ProductsLink>Overview</ProductsLink>
                <p className='mt-5 uppercase font-display text-xs tracking-widest text-gray-500'>use cases</p>
                <hr className='divide-x mb-6 mt-3 border-gray-300' />
                <ProductsLink>Enforce Policy as Code</ProductsLink>
                <ProductsLink className="mt-4">Infrastructure as Code</ProductsLink>
                <ProductsLink className="mt-4">Inject Secrets into Terraform</ProductsLink>
                <ProductsLink className="mt-4">Integrate with Existing Workflows</ProductsLink>
                <ProductsLink className="mt-4">Manage Kubernetes</ProductsLink>
                <ProductsLink className="mt-4">Manage Virtual Machine Images</ProductsLink>
                <ProductsLink className="mt-4">Multi-Cloud Deployment</ProductsLink>
                <ProductsLink className="mt-4">Network Infrastructure Automation</ProductsLink>
                <hr className='divide-x mb-3 mt-6 border-gray-300' />
                <p className='uppercase font-display text-xs tracking-widest text-gray-500'>editions</p>
                <hr className='divide-x mb-6 mt-3 border-gray-300' />
                <ProductsLink>Terraform CLI</ProductsLink>
                <ProductsLink className="mt-4">Terraform Cloud</ProductsLink>
                <ProductsLink className="mt-4">Terraform Enterprise</ProductsLink>
                <hr className='divide-x mb-3 mt-6 border-gray-300' />
                <ProductsLink className="mt-4">Registry</ProductsLink>
                <ProductsLink className="mt-4">Tutorials</ProductsLink>
                <p className='mt-6 uppercase font-display text-xs tracking-widest text-gray-500'>DOCS</p>
                <hr className='divide-x mb-6 mt-3 border-gray-300' />
                <ProductsLink>About the Docs</ProductsLink>
                <ProductsLink className="mt-4">Intro to Terraform</ProductsLink>
                <ProductsLink className="mt-4">Configuration Language</ProductsLink>
                <ProductsLink className="mt-4">Terraform CLI</ProductsLink>
                <ProductsLink className="mt-4">Terraform Cloud</ProductsLink>
                <ProductsLink className="mt-4">Terraform Enterprise</ProductsLink>
                <ProductsLink className="mt-4">Provider Use</ProductsLink>
                <ProductsLink className="mt-4">Plugin Development</ProductsLink>
                <ProductsLink className="mt-4">Registry Publishing</ProductsLink>
                <ProductsLink className="mt-4">Integration Program</ProductsLink>
                <ProductsLink className="mt-4">Terraform Tools</ProductsLink>
                <ProductsLink className="mt-4">CDK for Terraform</ProductsLink>
                <ProductsLink className="mt-4">Glossary</ProductsLink>
                <hr className='divide-x mb-6 mt-6 border-gray-300' />
                <ProductsLink>Community</ProductsLink>
                <Button
                    neutral
                    icon={BsGithub}
                    iconSize={24}
                    className="mt-4 p-1.5 border border-gray-300 hover:bg-gray-200 flex items-center justify-center transition-colors ease-in"
                ><span className="font-medium text-black text-sm ml-3">GitHub</span></Button>
                <Button mode="secondary" className="mt-4">Terraform Cloud</Button>
                <Button icon={BsDownload} iconSize={16} className="mt-4">
                    Download
                </Button>
            </div>
        )
    )
}

export default memo(forwardRef(NavMobileLinks))