import React, { Component } from 'react';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  handleCompleted() {
    this.props.completeTodo(this.props.todo.id);
  }

  handleDelete() {
    this.props.deleteTodo(this.props.todo.id);
  }

  renderTextStyle() {
    return {
      color: this.props.todo.completed ? 'lightgrey' : 'black',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  }

  render() {
    const textStyle = this.renderTextStyle();
    console.log(this.props);
    return (
      <ul>
        <li>
          <div style={textStyle}>
            {this.props.todo.text}
          </div>
          <button onClick={() => this.handleCompleted()}>toggle completed</button>
          <button onClick={() => this.handleDelete()}>delete</button>
        </li>
      </ul>
    );
  }
}

TodoItem.propTypes = {
  completeTodo: React.PropTypes.func,
  deleteTodo: React.PropTypes.func,
  todo: React.PropTypes.object,
};
