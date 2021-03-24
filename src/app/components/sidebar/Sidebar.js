import React, { useContext } from "react";
import Todo from "../todo/Todo";
import { TodoContext } from "app/contexts/TodoContext";
import AddTodoButton from "../addTodoButton/AddTodoButton";

export default function Sidebar({ className }) {
  const todoContext = useContext(TodoContext);
  const todos = todoContext.state.todos;
  const final = [];
  for (const todo in todos) {
    final.push(<Todo className="todo-list-item" key={todo} id={todo} />);
  }
  return (
    <div className={className + "-container"}>
      <div className={className}>
        <h1>Todos</h1>
        <div className="todos">{final}</div>
      </div>
      <AddTodoButton className="add-todo-button" />
    </div>
  );
}
