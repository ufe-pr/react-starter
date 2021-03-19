import React from 'react';

class AddTodoButton extends React.Component {
    render() {
        return (
            <button className={this.props.className}>
                Add new +
            </button>
        );
    }
}

export default AddTodoButton;