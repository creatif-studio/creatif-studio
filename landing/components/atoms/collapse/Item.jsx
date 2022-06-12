import { memo, useState, useCallback } from 'react'
import { BsArrowUp } from 'react-icons/bs'
import clsx from 'clsx'
import { Button } from 'components/atoms'

const Item = ({ id, Title, withArrow, Section, isShow, onShow }) => {
    const [show, setShow] = useState(isShow ?? false)

    const handleShow = useCallback(async () => {
        setShow(prev => !prev)
        if(onShow instanceof Function) onShow(id)
    }, [setShow, onShow, id])

    return (
        <section className='flex flex-col overflow-hidden border-b border-gray-300'>
            <Button neutral className='px-5 py-7 flex justify-between items-center' iconPosition="right" onClick={handleShow}>
                <span className='pr-3 text-left leading-relaxed'>{ Title }</span>
                {
                    withArrow && (
                        <BsArrowUp size={20} className={clsx(!isShow ? 'text-gray-400 rotate-180' : 'text-gray-900 rotate-0', 'transition-all duration-500')} />
                    )
                }
            </Button>
            <container className="grid">
                <section className={clsx(isShow ? 'max-h-screen opacity-100' : 'opacity-0 max-h-0','transition-all duration-500 px-5 overflow-hidden')}>
                    <div className='mb-7 text-zinc-700'>
                        { Section }
                    </div>
                </section>
            </container>
        </section>
    )
}

export default memo(Item)