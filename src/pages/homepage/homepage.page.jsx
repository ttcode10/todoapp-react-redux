import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDisplayInputField } from './../../redux/todo/todo.selector';
import { fireInputField } from './../../redux/todo/todo.action';

import './homepage.styles.scss';
import TodoList from './../../components/todo-list/todo-list.component';
import TodoInput from './../../components/todo-input/todo-input.component';
import { AddButton } from './../../components/button/button.component';

const HomePage = ({displayInputField, fireInputField}) => {

  return (
    <div className='homepage' >
      <TodoList />
      {
        displayInputField ? <TodoInput displayInputField={displayInputField} /> : null
      }
      <AddButton onClick={() => fireInputField()}/>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  displayInputField: selectDisplayInputField
});

const mapDispatchToProps = dispatch => ({
  fireInputField: () => dispatch(fireInputField())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);