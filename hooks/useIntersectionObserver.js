import { useCallback, useEffect, useRef } from "react"

const useIntersectionObserver = (ref, options, callbackObserve) => {
    const observer = useRef(null)
    const callback = useCallback((entries, observer) => {
        if(callbackObserve instanceof Function) callbackObserve(observer, entries, ref)
    }, [callbackObserve, ref])
    
    useEffect(() => {
        if(typeof window !=='undefined') observer.current = new IntersectionObserver(callback, options)
    }, [observer, options, callback])

    useEffect(() => {
        if(ref.current && observer.current) {
            observer.current.observe(ref.current)
        }

        return () => {
            if(ref.current && observer.current) {
                observer.current.disconnect(ref.current)
            }
        }

    }, [ref, observer])
}

export default useIntersectionObserver