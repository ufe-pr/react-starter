import React from 'react';
import Todo from '../todo/Todo';

class Sidebar extends React.Component {

    render() {
        const final = [];
        for (const todo in this.props.todos) {
            final.push(<Todo onClick={this.props.selectTodo} className="todo-list-item" key={todo} id={todo} todo={this.props.todos[todo]} onStatusChange={this.props.onTodoStatusChange} />)
        }
        return (
            <div className={this.props.className}>
                <h1>Todos</h1>
                <div className="todos">
                    {final}
                </div>
            </div>
        );
    }
}

export default Sidebar;