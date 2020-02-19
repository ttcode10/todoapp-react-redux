import TodoActionTypes from './todo.types';

export const addItem = item => ({
  type: TodoActionTypes.ADD_TODO_ITEM,
  payload: item
});

export const editItem = item => ({
  type: TodoActionTypes.EDIT_TODO_ITEM,
  payload: item
});

export const deleteItem = item => ({
  type: TodoActionTypes.DELETE_TODO_ITEM,
  payload: item
});

export const tickTodoItem = item => ({
  type: TodoActionTypes.TICK_TODO_ITEM,
  payload: item
});
