import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './todo-list.styles.scss';
import TodoItem from './../todo-item/todo-item.component';
import { selectTodoItems } from './../../redux/todo/todo.selector';

const TodoList = ({ todoItems }) => (
  <div className='todo-list-container' >
    {
      todoItems.map(todo => <TodoItem className='todo-card' key={todo.id} todo={todo} />)
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  todoItems: selectTodoItems
})

export default connect(mapStateToProps)(TodoList);
