import React from "react";

class Todo extends React.Component {

    onStatusChange(e) {
        this.props.onStatusChange(e, this.props.id);
        e.stopPropagation();
        console.log('Stopping propagation');
    }

    onClick() {
        console.log('Clicking')
        this.props.onClick(this.props.id);
    }

    render() {
        const className = this.props.className;
        const todo = this.props.todo;
        return (
            <div className={className + (todo.completed ? " completed" : "")} onClick={this.onClick.bind(this)}>
                <input
                    className={className + "-checkbox"}
                    checked={todo.completed}
                    onChange={this.onStatusChange.bind(this)}
                    type="checkbox"
                    onClick={(event) => event.stopPropagation()}
                />
                <div className={className + "-text-container"}>
                    <h5 className={className + "-text-content"}>{todo.content}</h5>
                    <p className={className + "-note-content"}>{todo.note}</p>
                </div>
            </div>
        );
    }
}

export default Todo;
