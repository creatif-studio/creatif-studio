// core modules
import { memo } from 'react'
// internal modules
import ProductsLink from 'components/atoms/ProductsLink'

const SelfManage = () => {
    return (
        <section className="border border-gray-200 p-3 py-8 items-center grid grid-cols-1 justify-between mt-10 xl:grid-cols-12">
            <strong className='tracking-wider text-sm text-center xl:col-span-2'>Need self-hosted?</strong>
            <p className='text-sm tracking-wide text-center my-5 leading-loose xl:leading-normal xl:my-0 xl:col-span-7'>CloudBoz Enterprise is a private install for organizations who prefer to self-manage</p>
            <ProductsLink className="text-blue-600 tracking-wide text-center xl:col-span-3" classNameOverrideWidth="w-full xl:w-fit" classNameOverrideSize="text-sm" classNameOverrideWeight="font-normal">Contact sales</ProductsLink>
        </section>
    )
}

export default memo(SelfManage)