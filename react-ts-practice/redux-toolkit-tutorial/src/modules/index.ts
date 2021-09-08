import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { githubSaga } from './githubsaga';
import counterReducer from './counter';
import todosReducer from './todos';
import githubReducer from './github';

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  github: githubReducer,
});

function* rootSaga() {
  yield all([githubSaga()]);
}
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export default store;
