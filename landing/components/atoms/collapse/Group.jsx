import { useState, useCallback } from 'react'
import Item from './Item'

/**
 * 
 * @param {items}  
 * @returns 
 */
const Group = ({ items }) => {
    const [data, setData] = useState(Array.isArray(items) ? items.map((itm, i) => ({
        ...itm,
        isShow: itm.isShow === true || itm.isShow === false ? itm.isShow : false,
        id: itm?.id ?? i
    })) : [])

    const onShow = useCallback((id) => {
        
        setData(prev => prev.map(itm => {
            if(itm.id !== id) return {
                ...itm,
                isShow: false,
            }
            return {
                ...itm,
                isShow: !itm.isShow,
            }
        }))

    }, [setData])

    return (
        <main className='flex flex-col overflow-hidden'>
            {
                data.map(({ id, Title, Section, isShow }) => (
                    <Item
                        key={id}
                        id={id}
                        isShow={isShow}
                        Title={Title}
                        Section={Section}
                        withArrow
                        onShow={onShow}
                    />
                ))
            }       
        </main>
    )
}

export default Group