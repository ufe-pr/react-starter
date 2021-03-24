import { TodoContext } from "app/contexts/TodoContext";
import React from "react";
import ContentEditable from "react-contenteditable";

class Body extends React.Component {
  get className() {
    return this.props.className;
  }

  renderForNoSelected() {
    return (
      <div className={this.className + "-container"}>
        <div className={this.className + " " + this.className + "-empty"}>
          <h2>You have not selected any todo</h2>
          <p>
            Select an item from the sidebar to view it here. You can also play
            around trying to make this long.
          </p>
        </div>
      </div>
    );
  }

  get contextState() {
      return this.context.state;
  }

  get selectedId() {
      return this.contextState.selectedId;
  }

  get todo() {
      return this.context.getTodoForId(this.selectedId);
  }

  handleTitleChange = (event) => {
      this.context.updateTodoTitle(event.target.value, this.selectedId);
  };

  handleContentChange = (event) => {
    this.context.updateTodoContent(event.target.value, this.selectedId);
  };

  renderForSelected() {
    const todo = this.todo;
    return (
      <div className={this.className + "-container"}>
        <div className={this.className}>
          <ContentEditable
            html={todo.content}
            tagName="h1"
            onChange={this.handleTitleChange}
          />
          <hr />
          <ContentEditable
            html={todo.note}
            tagName="p"
            onChange={this.handleContentChange}
          />
        </div>
      </div>
    );
  }

  render() {
    if (this.todo != null) {
      return this.renderForSelected();
    }
    return this.renderForNoSelected();
  }
}

Body.contextType = TodoContext;

export default Body;
