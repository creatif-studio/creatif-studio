// core modules
import { memo } from 'react'
// internal modules
import ProductsLink from 'components/atoms/ProductsLink'

const SelfManage = () => {
    return (
        <section className="border border-gray-200 p-3 py-8 items-center grid grid-cols-1 justify-between mt-10 lg:grid-cols-12">
            <strong className='tracking-wider text-sm text-center lg:col-span-2'>Need self-hosted?</strong>
            <p className='text-sm tracking-wide text-center my-5 leading-loose lg:leading-normal lg:my-0 lg:col-span-7'>Terraform Enterprise is a private install for organizations who prefer to self-manage</p>
            <ProductsLink className="text-blue-600 tracking-wide text-center lg:col-span-3" classNameOverrideWidth="w-full lg:w-fit" classNameOverrideSize="text-sm" classNameOverrideWeight="font-normal">Contact sales</ProductsLink>
        </section>
    )
}

export default memo(SelfManage)