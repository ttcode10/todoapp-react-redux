import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addItem, closeInputField } from './../../redux/todo/todo.action';

import './todo-input.styles.scss';
import { Card, Input } from 'antd';

const TodoInput = ({addItem, closeInputField, ...otherProps}) => {
  const todoId = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3||0x8);
        return v.toString(16);
      });
  }

  const [todoItem, setTodo] = useState({
    id: '',
    title: '',
    completed: false
  });

  const {title} = todoItem;

  const onChange = value => setTodo({...todoItem, id: todoId(), title: value});

  const onPressEnter = () => {
    addItem(todoItem);
    setTodo({...todoItem, id: '', title: ''});
    closeInputField();
  }

  return (
    <Card className='todo-input-container' bordered={false}>
      <Input
        className='todo-input-field'
        placeholder="Create a todo item..."
        value={title}
        onChange={event => onChange(event.target.value)}
        onPressEnter={onPressEnter}
        autoFocus
        {...otherProps}
      />
    </Card>
  );
}

const mapDispatchToProps = dispatch => ({
  addItem: todoItem => dispatch(addItem(todoItem)),
  closeInputField: () => dispatch(closeInputField())
});

export default connect(null, mapDispatchToProps)(TodoInput);

