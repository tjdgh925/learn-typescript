import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
