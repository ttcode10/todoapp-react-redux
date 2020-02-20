import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectTodoItems } from './../../redux/todo/todo.selector';
import { selectDisplayNewInput, selectDisplayEditInput, selectDisplayInputItem } from './../../redux/input/input.selector';

import './todo-list.styles.scss';
import TodoItem from './../todo-item/todo-item.component';
import TodoInput from './../todo-input/todo-input.component';

const TodoList = ({ todoItems, displayInputItem, displayNewInput, displayEditInput }) => {
  if (displayInputItem == null) {
    return (
      <div className='todo-list-container' >
        {
          todoItems.map(todo =>
            <TodoItem className='todo-card' key={todo.id} todo={todo} displayEditInput={displayEditInput} />)
        }
        <TodoInput displayNewInput={displayNewInput} />
      </div>
    );
  } return (
    <div className='todo-list-container' >
      {
        todoItems.map(todo =>
          todo.id === displayInputItem.id ?
          <TodoInput displayEditInput={displayEditInput} key={displayInputItem.id} displayInputItem={displayInputItem} /> :
          <TodoItem className='todo-card' key={todo.id} todo={todo} />)
      }
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  todoItems: selectTodoItems,
  displayEditInput: selectDisplayEditInput,
  displayNewInput: selectDisplayNewInput,
  displayInputItem: selectDisplayInputItem
})

export default connect(mapStateToProps)(TodoList);
