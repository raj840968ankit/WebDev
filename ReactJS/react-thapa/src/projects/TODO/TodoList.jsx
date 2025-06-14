import { MdCheck, MdDeleteForever } from "react-icons/md"

export const TodoList = ({ task, checked, onHandleCheckedTodo, onDeleteTodo}) => {
    const handleTodoDelete = (task) => {
        onDeleteTodo(task)
    }

    
    return (
        <li className="todo-item">
            <span className={checked ? "checkList" : "nonCheckList"}>{task}</span>
            <button className="check-btn" onClick={() => onHandleCheckedTodo(task)}>
                <MdCheck/>
            </button>
            <button className="delete-btn" onClick={() => handleTodoDelete(task)}>
                <MdDeleteForever/>
            </button>
        </li> 
    )
}