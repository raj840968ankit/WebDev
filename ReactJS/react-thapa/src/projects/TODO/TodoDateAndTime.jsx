import { useEffect, useState } from "react"

export const TodoDateAndTime = () => {
    //!this useState is for storing date and time (task)
    const [dateAndTime, setDateAndTime] = useState([])

    //!Todo Date and Time
    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date()
            const formattedDate = date.toLocaleDateString()
            const formattedTime = date.toLocaleTimeString()

            setDateAndTime(`${formattedDate} - ${formattedTime}`)
        }, 1000)

        return () => clearInterval(interval) 
    }, [])
    return (
        <h2 className="date-time">{dateAndTime}</h2>
    )
}