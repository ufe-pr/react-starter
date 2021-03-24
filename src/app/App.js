import "./App.scss";
import React, { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Body from "./components/body/Body";
import { TodoContext } from "app/contexts/TodoContext";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  function onTodoStatusChange(completed, id) {
    const newTodos = todos.slice();
    const item = newTodos[id];
    item.completed = completed;
    newTodos[id] = item;
    setTodos(newTodos);
  }

  function selectTodo(id) {
    setSelectedId(id);
  }

  function getSelectedTodo() {
    if (selectedId == null) return null;
    return todos[selectedId];
  }

  function getTodoForId(id) {
    return todos[id];
  }

  function createTodo({ content, completed, note }) {
    setTodos(todos.concat([{ content: content, completed: completed, note: note }]));
    return todos.length;
  }


  function updateTodoTitle(newTitle, todoId) {
    const newTodos = todos.slice();
    const item = newTodos[todoId];
    item.content = newTitle;
    newTodos[todoId] = item;
    setTodos(newTodos);
  }

  function updateTodoContent(newContent, todoId) {
    const newTodos = todos.slice();
    const item = newTodos[todoId];
    item.note = newContent;
    newTodos[todoId] = item;
    setTodos(newTodos);
  }

  return (
    <TodoContext.Provider
      value={{
        state: {
          todos: todos,
          selectedId: selectedId,
        },
        handleTodoStatusChange: onTodoStatusChange,
        selectTodo: selectTodo,
        selectedTodo: getSelectedTodo,
        getTodoForId: getTodoForId,
        createTodo: createTodo,
        updateTodoTitle: updateTodoTitle,
        updateTodoContent: updateTodoContent,
      }}
    >
      <div className="app">
        <Sidebar
          key="todo-sidebar"
          className="sidebar"
          todoClassName="todo-list-item"
        />
        <Body
          key="todo-body"
          className="todo-body"
        />
      </div>
    </TodoContext.Provider>
  );
}
