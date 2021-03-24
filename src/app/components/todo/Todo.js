import React, {useRef, useContext} from "react";
import { TodoContext } from "app/contexts/TodoContext";


export default function Todo({className, id}) {
    const checkBoxRef = useRef(false);
    const todoContext = useContext(TodoContext);
    const todo = todoContext.getTodoForId(id);
    return (
        <div className={className + (todo.completed ? " completed" : "")} onClick={() => todoContext.selectTodo(id)}>
            <input
                className={className + "-checkbox"}
                checked={todo.completed}
                onChange={() => todoContext.handleTodoStatusChange(checkBoxRef.current.checked, id)}
                type="checkbox"
                ref={checkBoxRef}
                onClick={(e) => e.stopPropagation()}
            />
            <div className={className + "-text-container"}>
                <h5 className={className + "-text-content"}>{todo.content}</h5>
                <p className={className + "-note-content"}>{todo.note}</p>
            </div>
        </div>
    );
}
