import { useEffect, useState } from 'react'
import faq from '../api/Faq.json'
import { Faq } from './UI/Faq'

export const Accordian = () => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [activeID, setActiveID] = useState(false);

    const handleToggle = (id) => {
        setActiveID(((prevId) => (prevId === id) ? false : id))
    }

    useEffect(() => {
        setData(faq)
        setLoading(false)
    }, [])

    if(loading){
        return <h1>Loading....</h1>
    }

    return (
        <>
            <h1>The Accordion</h1>
            <ul className='section-accordion'>
                {
                    data.map((curEle) => {
                        return (
                            <Faq 
                                key={curEle.id} 
                                data={curEle} 
                                onToggle={() => handleToggle(curEle.id)} 
                                activeID={activeID === curEle.id}
                            />
                        )
                    })
                }
            </ul>
        </>
    )
}