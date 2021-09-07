import { combineReducers } from 'redux';
import counter from './Counter';
import todos from './todos';
import github from './github';
// import { githubSaga } from './github';
import { all } from 'redux-saga/effects';
const rootReducer = combineReducers({
  counter,
  todos,
  github,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

// export function* rootSaga() {
//   yield all([githubSaga()]);
// }
