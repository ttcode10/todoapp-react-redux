import { combineReducers } from 'redux';

import todoReducer from './todo/todo.reducer';
import inputReducer from './input/input.reducer';

const rootReducer = combineReducers({
  todo: todoReducer,
  input: inputReducer
});

export default rootReducer;