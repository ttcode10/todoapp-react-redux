import React from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import { tickTodoItem, deleteItem, triggerEditMode } from './../../redux/todo/todo.action';
// import { selectTransformInputField } from './../../redux/todo/todo.selector';

import TodoInput from './../todo-input/todo-input.component';
import { EditButton, DeleteButton } from './../button/button.component';
import './todo-item.styles.scss';
import { Card, Checkbox } from 'antd';

const TodoItem = ({todo, tickTodoItem, deleteItem, triggerEditMode}) => {
  const textStyle = {
    textDecoration: 'line-through'
  };

  if (todo.isEdit) {
    return <TodoInput />
  }
  return (
    <Card className='todo-item' bordered={false}>
      <Checkbox className='todo-item-checkbox' checked={todo.completed} onChange={() => tickTodoItem(todo)} />
      <p style={ todo.completed ? textStyle : null} >{todo.title}</p>
      <div className='todo-item-buttons'>
        <EditButton onClick={() => triggerEditMode(todo)} />
        <DeleteButton onClick={() => deleteItem(todo)} />
      </div>
    </Card>
  );
}

// const mapStateToProps = createStructuredSelector({
//   transformInputField: selectTransformInputField
// })

const mapDispatchToProps = dispatch => ({
  tickTodoItem: item => dispatch(tickTodoItem(item)),
  deleteItem: item => dispatch(deleteItem(item)),
  triggerEditMode: item => dispatch(triggerEditMode(item))
});

export default connect(null, mapDispatchToProps)(TodoItem);





// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import { tickTodoItem, deleteItem, addItem, closeInputField } from './../../redux/todo/todo.action'
// import { selectDisplayInputField } from './../../redux/todo/todo.selector';

// import { EditButton, DeleteButton } from './../button/button.component';
// import './todo-item.styles.scss';
// import { Card, Checkbox, Input } from 'antd';

// const TodoItem = ({todo, tickTodoItem, deleteItem, addItem, closeInputField, displayInputField, ...otherProps}) => {
//   const todoId = () => {
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//         var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3||0x8);
//         return v.toString(16);
//       });
//   }

//   const [todoItem, setTodo] = useState({
//     id: '',
//     title: '',
//     completed: false
//   });

//   const {title} = todoItem;

//   const onChange = value => setTodo({...todoItem, id: todoId(), title: value});

//   const onPressEnter = () => {
//     addItem(todoItem);
//     setTodo({...todoItem, id: '', title: ''});
//     closeInputField();
//   }

//   const textStyle = {
//     textDecoration: 'line-through'
//   };

//   if (displayInputField) {
//     return (
//       <Card className='todo-input-container' bordered={false}>
//         <Input
//           className='todo-input-field'
//           placeholder="Create a todo item..."
//           value={title}
//           onChange={event => onChange(event.target.value)}
//           onPressEnter={onPressEnter}
//           autoFocus
//           {...otherProps}
//         />
//       </Card>
//     )
//   } else {
//     return (
//       <Card className='todo-item' bordered={false}>
//         <Checkbox className='todo-item-checkbox' checked={todo.completed} onChange={() => tickTodoItem(todo)} />
//         <p style={ todo.completed ? textStyle : null} >{todo.title}</p>
//         <div className='todo-item-buttons'>
//           <EditButton />
//           <DeleteButton onClick={() => deleteItem(todo)} />
//         </div>
//       </Card>
//     );
//   }
// }

// const mapStateToProps = createStructuredSelector({
//   displayInputField: selectDisplayInputField
// });

// const mapDispatchToProps = dispatch => ({
//   tickTodoItem: item => dispatch(tickTodoItem(item)),
//   deleteItem: item => dispatch(deleteItem(item)),
//   addItem: todoItem => dispatch(addItem(todoItem)),
//   closeInputField: () => dispatch(closeInputField())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);





