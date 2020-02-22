import { createSelector } from 'reselect';

const selectTodos = state => state.todo;

const selectKeywords = createSelector(
  [selectTodos],
  todo => todo.keywords
);

export const selectTodoItems = createSelector(
  [selectTodos, selectKeywords],
  (todo, keywords) => todo.todoItems.filter(todoItem => 
    todoItem.title.toLowerCase().includes(keywords.toLowerCase())
  )
);
