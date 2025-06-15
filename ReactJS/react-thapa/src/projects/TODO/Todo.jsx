import { useState } from "react"
import "./Todo.css"
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDateAndTime } from "./TodoDateAndTime";

const todoKey = "reactTodo";

const getLocalStorageTodoData = () => {  //?this is used when local storage is added for setting task value
        const rawTodos = localStorage.getItem(todoKey)
        if(!rawTodos) return []

        try {
            return JSON.parse(rawTodos);
        } catch (e) {
            console.error("Error parsing todos from localStorage:", e);
            return [];
        }
    }


export const Todo = () => {
    //!this useState is for storing user input (task)
    // const [task, setTask] = useState([]) //?this is used before local storage
    const [task, setTask] = useState(() => getLocalStorageTodoData()) 

    const checkZeroTask = task.length === 0 ? true : false;

    const handleFormSubmit = (inputValue) => {
        const{id, content, checked} = inputValue
        if(!content) return;

        //?checking whether user inputs the same task
        let exist = false;
        task.map((obj) => {
            if(obj.content === content) {
                exist = true;
                return ;
            }    
        })
        if(exist) {
            return;
        }

        //?here we are storing the data in 2nd state
        setTask((prevTask) => [...prevTask, {id, content, checked}])
    }

    //! handling todo item delete
    const handleTodoDelete = (value) => {
        //removing specified element from task rray
        const filteredTask = task.filter((t) => (t.content !== value))
        setTask(filteredTask)
    }

    //!clearing all the task
    const handleClearTask = () => {
        //removing all element from task array
        setTask([])
    }

    //!defining handle Checked todo
    const handleCheckedTodo = (value) => {
        const updatedTask = task.map((curTask) => {
            if(curTask.content === value){
                return {...curTask, checked : !curTask.checked}
            }
            else{
                return curTask;
            }
        })
        setTask(updatedTask)
    }

    //! adding todo data to local storage
    //! syntax("localStorageName", "data : string")
    localStorage.setItem(todoKey, JSON.stringify(task))

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <TodoDateAndTime/>
            </header>
            <TodoForm onAddTodo={handleFormSubmit}/>
            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((curTask) => {
                            return <TodoList key={curTask.id} 
                                task={curTask.content} 
                                checked={curTask.checked}
                                onDeleteTodo={handleTodoDelete}
                                onHandleCheckedTodo={handleCheckedTodo}
                            />
                        })
                    }
                </ul>
            </section>
            <section>
                <button className="clear-btn" 
                    onClick={handleClearTask}
                    style={{display : checkZeroTask ? "none" : "block"}}
                >
                    Clear All
                </button>
            </section>
        </section>
    )
}