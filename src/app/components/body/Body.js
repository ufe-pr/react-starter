import React from 'react';

class Body extends React.Component {
    get className() {
        return this.props.className;
    }

    renderForNoSelected() {
        return (
            <div className={this.className + "-container"}>
                <div className={this.className + " " + this.className + "-empty"}>
                    <h2>You have not selected any todo</h2>
                    <p>Select an item from the sidebar to view it here. You can also play around trying to make this long.</p>
                </div>
            </div>
        );
    }

    renderForSelected() {
        const todo = this.props.selectedTodo;
        return (
            <div className={this.className + "-container"}>
                <div className={this.className}>
                    <h1>{todo.content}</h1>
                    <hr />
                    <p>{todo.note}</p>
                </div></div>
        );
    }

    render() {
        if (this.props.selectedTodo != null) {
            return this.renderForSelected();
        }
        return this.renderForNoSelected();
    }
}

export default Body;