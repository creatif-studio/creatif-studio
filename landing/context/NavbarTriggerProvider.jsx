import { useContext, useState, useCallback, useEffect, useRef, createContext } from 'react'
import useObserver from 'hooks/useIntersectionObserver'

const NavbarTriggerContext = createContext()

export const useNavbarTrigger = () => useContext(NavbarTriggerContext)

const NavbarTriggerProvider = ({ children }) => {
    const [isIntersecting, setIsIntersecting] = useState(true)
    const triggerElementRef = useRef()
    const options = useRef({
        root: null,
        rootMargin: '0px',
        threshold: 0
    })
    
    useObserver(
        triggerElementRef,
        options, 
        useCallback((observer, entries, ref) => {
            
            if(entries[0].isIntersecting) setIsIntersecting(true)
            else setIsIntersecting(false)
            
        }, [setIsIntersecting])
    )

    return (
        <NavbarTriggerContext.Provider value={{ isIntersecting, triggerElementRef }}>
            { children }
        </NavbarTriggerContext.Provider>
    )
}

export default NavbarTriggerProvider