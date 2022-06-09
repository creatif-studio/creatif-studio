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
        <div className={clsx(className, 'mt-5 flex h-fit md:mr-14 lg:mr-36 xl:mr-14')}>
            <section className="w-6">
                { icon }
            </section>
            <section className="flex flex-col items-start ml-5">
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