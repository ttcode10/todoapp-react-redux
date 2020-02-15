import React from 'react';
import { connect } from 'react-redux';

import { tickTodoItem, deleteItem } from './../../redux/todo/todo.action'

import { EditButton, DeleteButton } from './../button/button.component';
import './todo-item.styles.scss';
import { Card, Checkbox } from 'antd';

const TodoItem = ({todo, tickTodoItem, deleteItem}) => {
  const textStyle = {
    textDecoration: 'line-through'
  };

  return (
    <Card className='todo-item' bordered={false}>
      <Checkbox className='todo-item-checkbox' checked={todo.completed} onChange={() => tickTodoItem(todo)} />
      <p style={ todo.completed ? textStyle : null} >{todo.title}</p>
      <div className='todo-item-buttons'>
        <EditButton />
        <DeleteButton onClick={() => deleteItem(todo)} />
      </div>
    </Card>
  );
}

const mapDispatchToProps = dispatch => ({
  tickTodoItem: item => dispatch(tickTodoItem(item)),
  deleteItem: item => dispatch(deleteItem(item))
})

export default connect(null, mapDispatchToProps)(TodoItem);
