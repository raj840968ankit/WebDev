import { useState } from "react"

export const TodoForm = ({onAddTodo}) => {
    //!this useState is for getting user input value
    const [inputValue, setInputValue] = useState({id : "", content : "", checked : false})

    const handleInputChange = (value) => {
        setInputValue({id : value, content : value, checked : false})
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        onAddTodo(inputValue)
        setInputValue({id : "", content : "", checked : false})
    }
    return (
        <section className="form">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type="text" 
                        className="todo-input" 
                        autoComplete="off"
                        value={inputValue.content}
                        onChange={(e) => handleInputChange(e.target.value)}
                    />
                </div>
                <div>
                    <button type='submit' className="todo-button">Add Task</button>
                </div>
            </form>
        </section>
    )
}