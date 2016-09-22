import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as TodoActions from '../../actions/TodoApp';
import todoStore from '../../../App/store';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const initialState = [{
  text: '할 일 목록 #1',
  completed: false,
  id: 1,
}];

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(TodoActions, todoStore.dispatch)
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class TodoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TodoInput addTodo={this.props.actions.addTodo} />
        <TodoList todos={this.props.TodoApp} actions={this.props.actions} />
      </div>
    );
  }
}
