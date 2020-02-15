import TodoActionTypes from './todo.types';

import TODO_DATA from './todo-list.data';
import { tickTodoItem } from './todo.utils';

const INITIAL_STATE = {
  isNew: false,
  todoItems: TODO_DATA
}

const todoReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case TodoActionTypes.FIRE_INPUT_FIELD:
      return {
        ...state,
        isNew: true
      };
    case TodoActionTypes.CLOSE_INPUT_FIELD:
      return {
        ...state,
        isNew: false
      };
    case TodoActionTypes.ADD_TODO_ITEM:
      return {
        ...state,
        todoItems: [...state.todoItems, action.payload]
      };
    case TodoActionTypes.EDIT_TODO_ITEM:
      return {
        ...state,
        todoItems: action.payload
      };
    case TodoActionTypes.DELETE_TODO_ITEM:
      return {
        ...state,
        todoItems: state.todoItems.filter(todoItem => todoItem.id !== action.payload.id)
      };
    case TodoActionTypes.COMPLETE_TODO_ITEM:
      return {
        ...state,
        todoItems: action.payload
      };
    case TodoActionTypes.TICK_TODO_ITEM:
      return {
        ...state,
        todoItems: tickTodoItem(state.todoItems, action.payload)
      }
    default:
      return state;
  }
}

export default todoReducer;