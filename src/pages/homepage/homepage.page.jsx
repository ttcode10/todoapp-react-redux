import React from 'react';
import { connect } from 'react-redux';

import { fireNewInput } from './../../redux/input/input.action';

import './homepage.styles.scss';
import TodoList from './../../components/todo-list/todo-list.component';
import { AddButton } from './../../components/button/button.component';

const HomePage = ({fireNewInput}) => {
  return (
    <div className='homepage' >
      <TodoList />
      <AddButton onClick={() => {fireNewInput()}}/>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  fireNewInput: () => dispatch(fireNewInput()),
  // closeInputField: () => dispatch(closeInputField())
})

export default connect(null, mapDispatchToProps)(HomePage);
