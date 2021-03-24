import React, { useContext } from "react";
import { TodoContext } from "app/contexts/TodoContext";

export default function AddTodoButton({ className }) {
  const todoContext = useContext(TodoContext);
  function addTodo() {
    const id = todoContext.createTodo({
      content: "Replace with your title",
      completed: false,
      note: "Add the contents of your note here.",
    });
    todoContext.selectTodo(id);
  }
  return (
    <button className={className} onClick={addTodo}>
      +
    </button>
  );
}
