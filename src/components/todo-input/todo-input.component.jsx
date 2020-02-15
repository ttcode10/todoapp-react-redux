import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { addItem, editItem, closeInputField } from './../../redux/todo/todo.action';
import { selectItemToEdit } from '../../redux/todo/todo.selector';

import './todo-input.styles.scss';
import { Card, Input } from 'antd';

const TodoInput = ({addItem, editItem, closeInputField, itemToEdit, ...otherProps}) => {
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

  const onChange = value => {
    if (itemToEdit.isEdit) {
      setTodo({...todoItem, id: itemToEdit.id, title: value});
    } else {
      setTodo({...todoItem, id: todoId(), title: value});
    }
  };

  const onPressEnter = () => {
    if (itemToEdit.isEdit) {
      editItem(todoItem);
    } else {
      addItem(todoItem);
    }
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

const mapStateToProps = createStructuredSelector({
  itemToEdit: selectItemToEdit
})

const mapDispatchToProps = dispatch => ({
  addItem: todoItem => dispatch(addItem(todoItem)),
  editItem: todoItem => dispatch(editItem(todoItem)),
  closeInputField: () => dispatch(closeInputField())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);

