import { useEffect, useState } from "react"
import "./Todo.css"
import { MdCheck, MdDeleteForever } from "react-icons/md";

export const Todo = () => {
    //!this useState is for getting user input value
    const [inputValue, setInputValue] = useState("")

    //!this useState is for storing user input (task)
    const [task, setTask] = useState([])

    //!this useState is for storing date and time (task)
    const [dateAndTime, setDateAndTime] = useState([])

    const handleInputChange = (value) => {
        setInputValue(value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        if(!inputValue) return;

        //?checking whether user inputs the same task
        if(task.includes(inputValue)) {
            setInputValue("")
            return;
        }
        //?here we are storing the data in 2nd state
        setTask((prevTask) => [...prevTask, inputValue])

        setInputValue("")
    }

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
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <h2 className="date-time">{dateAndTime}</h2>
            </header>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" 
                            className="todo-input" 
                            autoComplete="off"
                            value={inputValue}
                            onChange={(e) => handleInputChange(e.target.value)}
                        />
                    </div>
                    <div>
                        <button type='submit' className="todo-button">Add Task</button>
                    </div>
                </form>
            </section>
            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((curTask, index) => {
                            return (
                                <li key={index} className="todo-item">
                                    <span>{curTask}</span>
                                    <button className="check-btn"><MdCheck/></button>
                                    <button className="delete-btn"><MdDeleteForever/></button>
                                </li> 
                            )
                        })
                    }
                </ul>
            </section>
        </section>
    )
}