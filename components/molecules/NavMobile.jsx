import clsx from 'clsx'
import { memo, useRef, useState, useEffect, useCallback, useId } from 'react'
import { BsChevronUp } from 'react-icons/bs'
import NavMobileLinks from './NavMobileLinks';

const NavMobile = () => {
    const id = useId()
    const popperRef = useRef()
    const [show, setShow] = useState(false)
    const handleToggle = useCallback(() => setShow(prev => !prev), [setShow])

    useEffect(() => {
        const callbackEvent = (e) => {
            if(popperRef.current?.contains(e.target)) return
            setShow(false)
            document.removeEventListener('click', callbackEvent)
        }

        setTimeout(() => show && document.addEventListener('click', callbackEvent), 1);
        return () => document.removeEventListener('click', callbackEvent)
    }, [id, show, setShow, popperRef])

    return (
        <section className="relative xl:hidden">
            <button onClick={handleToggle} className="flex items-center justify-between text-sm font-semibold">
                Menu
                <BsChevronUp size={10} className={clsx(!show && "rotate-180", "ml-2 duration-500 transition fill-black stroke-2 outline-none")} />
            </button>
            <NavMobileLinks ref={popperRef} show={show} />
        </section>
    )
}

export default memo(NavMobile)