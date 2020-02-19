import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { addItem, editItem } from './../../redux/todo/todo.action';
import { closeInputField } from './../../redux/input/input.action';
import { selectDisplayNewInput, selectDisplayEditInput, selectDisplayInputItem } from '../../redux/input/input.selector';

import './todo-input.styles.scss';
import { Card, Input } from 'antd';

const TodoInput = ({addItem, editItem, closeInputField, displayNewInput, displayEditInput, displayInputItem, ...otherProps}) => {
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
    if (displayEditInput) {
      setTodo({...todoItem, id: displayInputItem.id, title: value});
    } else {
      setTodo({...todoItem, id: todoId(), title: value});
    }
  };

  const onPressEnter = () => {
    if (displayEditInput) {
      editItem(todoItem);
    } else {
      addItem(todoItem);
    }
    setTodo({...todoItem, id: '', title: ''});
    closeInputField();
  }

  if (displayNewInput || displayEditInput) {
    return (
      <Card className='todo-input-container' bordered={false}>
        <Input
          className='todo-input-field'
          placeholder="Write a todo item..."
          value={title}
          onChange={event => onChange(event.target.value)}
          onPressEnter={onPressEnter}
          autoFocus
          {...otherProps}
        />
      </Card>
    );
  } else return null;

}

const mapStateToProps = createStructuredSelector({
  displayNewInput: selectDisplayNewInput,
  displayEditInput: selectDisplayEditInput,
  displayInputItem: selectDisplayInputItem
})

const mapDispatchToProps = dispatch => ({
  addItem: todoItem => dispatch(addItem(todoItem)),
  editItem: todoItem => dispatch(editItem(todoItem)),
  closeInputField: () => dispatch(closeInputField())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);

// export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);

