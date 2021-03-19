import './App.scss';
import React from 'react';
import Sidebar from "./components/sidebar/Sidebar";
import Body from "./components/body/Body";


class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null,
      todos: [
        {
          content: "Move the todo management into the TodoApp",
          note: "W3Schools is optimized for learning and training."
            + " Examples might be simplified to improve reading and learning."
            + " Tutorials, references, and examples are constantly reviewed to avoid "
            + "errors, but we cannot warrant full correctness of all content. "
            + "While using W3Schools, you agree to have read and "
            + "accepted our terms of use, cookie and privacy policy.",
          completed: true,
        },
        {
          content: "Implement the Body component",
          note: "Some random note",
          completed: true,
        },
        {
          content: "Add the checks",
          note: "Some random note",
          completed: true,
        },
      ],
    };
  }

  onTodoStatusChange(event, id) {
    const newStatus = event.target.checked;
    const todos = this.state.todos;
    const item = todos[id];
    item.completed = newStatus;
    todos[id] = item;
    this.setState({ todos: todos });
  }

  selectTodo(id) {
    console.log('Clicking')
    this.setState({ selectedId: id });
  }

  getSelectedTodo() {
    if (this.state.selectedId == null) return null;
    return this.state.todos[this.state.selectedId];
  }

  render() {
    return (
      <div className="app">
        <Sidebar key="todo-sidebar" className="sidebar" selectTodo={this.selectTodo.bind(this)} todoClassName='todo-list-item' onTodoStatusChange={this.onTodoStatusChange.bind(this)} todos={this.state.todos} />
        <Body key="todo-body" className="todo-body" selectedId={this.state.selectedId} selectedTodo={this.getSelectedTodo()} />
      </div>
    );
  }
}

export default TodoApp; 
