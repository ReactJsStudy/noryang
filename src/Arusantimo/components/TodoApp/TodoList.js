import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    let todoItems = null;
    if (this.props.todos !== undefined) {
      todoItems = this.props.todos.map((todo) => {
       return <TodoItem key={todo.id} todo={todo} deleteTodo={this.props.actions.deleteTodo} completeTodo={this.props.actions.completeTodo}/>
      });
    }
    return (
      <div>{todoItems}</div>
    );
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.array,
};
