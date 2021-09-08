import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import todosReducer from './todos';

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
