// core modules
import { memo } from 'react'
// third party modules
import { getChildrenByType } from 'react-nanny'
// internal modules
import IntroCardIcon from './IntroCardIcon'
import IntroCardTitle from './IntroCardTitle'
import IntroCardDescription from './IntroCardDescription'
import clsx from 'clsx'

const IntroCard = ({ className, children }) => {
    const icon = getChildrenByType(children, IntroCardIcon)
    const title = getChildrenByType(children, IntroCardTitle)
    const description = getChildrenByType(children, IntroCardDescription)
    
    return (
        <div className={clsx(className, 'flex h-fit')}>
            {
                icon.length 
                ? (
                    <section className="w-6">
                        { icon }
                    </section>
                )
                : null
            }
            <section className={clsx('flex flex-col items-start', icon.length && 'ml-5')}>
                { title }
                { description }
            </section>
        </div>
    )
}

IntroCard.Icon = IntroCardIcon
IntroCard.Title = IntroCardTitle
IntroCard.Description = IntroCardDescription

export default IntroCard