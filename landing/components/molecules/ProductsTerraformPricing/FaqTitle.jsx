// core modules
import { memo } from 'react'
// internal modules
import ProductsSectionTitle from 'components/atoms/ProductsSectionTitle'

const FaqTitle = () => {
    return (
        <div className="mt-64">
            <ProductsSectionTitle 
                className="text-center"
            >Frequently Asked Questions</ProductsSectionTitle>
        </div>
    )
}

export default memo(FaqTitle)