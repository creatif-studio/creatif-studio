// third party modules
import clsx from 'clsx'

const IntroCardDescription = ({ children, className }) => {
    return (
        <p className={clsx(className, 'text-sm text-gray-700 mt-4 leading-loose')}>{children}</p>
    )
}

export default IntroCardDescription