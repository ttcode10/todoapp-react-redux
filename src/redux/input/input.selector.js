import { createSelector } from 'reselect';

const selectInput = state => state.input;

export const selectDisplayNewInput = createSelector(
  [selectInput],
  input => input.isNew
);

export const selectDisplayEditInput = createSelector(
  [selectInput],
  input => input.isEdit
);

export const selectDisplayInputItem = createSelector(
  [selectInput],
  input => input.todoItem
);