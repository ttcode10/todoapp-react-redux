import TodoActionTypes from './todo.types';

import TODO_DATA from './todo-list.data';
import { tickTodoItem, editTodoItem, mapTodoItemsWithSearchKeywords } from './todo.utils';

const INITIAL_STATE = {
  todoItems: TODO_DATA,
  keywords: ''
}

const todoReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO_ITEM:
      return {
        ...state,
        todoItems: [...state.todoItems, action.payload]
      };
    case TodoActionTypes.EDIT_TODO_ITEM:
      return {
        ...state,
        todoItems: editTodoItem(state.todoItems, action.payload)
      };
    case TodoActionTypes.DELETE_TODO_ITEM:
      return {
        ...state,
        todoItems: state.todoItems.filter(todoItem => todoItem.id !== action.payload.id)
      };
    case TodoActionTypes.TICK_TODO_ITEM:
      return {
        ...state,
        todoItems: tickTodoItem(state.todoItems, action.payload)
      };
    case TodoActionTypes.FIRE_SEARCH:
      return {
        ...state,
        todoItems: mapTodoItemsWithSearchKeywords(state.todoItems, action.payload)
      };
    default:
      return state;
  }
}

export default todoReducer;
