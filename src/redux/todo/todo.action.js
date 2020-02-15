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

export const completeItem = item => ({
  type: TodoActionTypes.COMPLETE_TODO_ITEM,
  payload: item
});

export const fireInputField = () => ({
  type: TodoActionTypes.FIRE_INPUT_FIELD,
});

export const closeInputField = () => ({
  type: TodoActionTypes.CLOSE_INPUT_FIELD
});

export const tickTodoItem = item => ({
  type: TodoActionTypes.TICK_TODO_ITEM,
  payload: item
});