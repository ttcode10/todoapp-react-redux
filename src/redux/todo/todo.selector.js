import { createSelector } from 'reselect';

const selectTodos = state => state.todo;

export const selectTodoItems = createSelector(
  [selectTodos],
  todo => todo.todoItems
);

export const selectDisplayInputField = createSelector(
  [selectTodos],
  todo => todo.isNew
);

// export const select