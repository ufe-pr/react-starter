import React from "react";

export const TodoContext = React.createContext({
  state: {},
  handleTodoStatusChange: () => {},
  selectTodo: () => {},
  selectedTodo: () => {},
  getTodoForId: () => {},
  updateTodoContent: () => {},
  updateTodoTitle: () => {},
});
