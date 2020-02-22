import { all, call } from 'redux-saga/effects';

import { todoSaga } from './todo/todo.saga';

export default function* rootSaga() {
  yield all([
    call(todoSaga)
  ])
}