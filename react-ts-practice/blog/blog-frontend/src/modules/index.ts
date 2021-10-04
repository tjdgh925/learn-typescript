import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authReducer from './auth';
import postReducer from './posts';
import { check, tempSetUser } from './auth';
import { all } from 'redux-saga/effects';

import { authSaga } from '../sagas/authSaga';
import { postSaga } from '../sagas/postSaga';
import { loginData, signUpData } from '../types/types';

const tempData: loginData | signUpData = JSON.parse(
  localStorage.getItem('user') || '{}'
);

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
});

function* rootSaga() {
  yield all([authSaga(), postSaga()]);
}
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});
function loadUser() {
  try {
    const user: any = localStorage.getItem('user');
    if (!user) return;
    store.dispatch(tempSetUser(tempData));
    store.dispatch(check());
  } catch (e) {
    console.log('error');
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

export type RootState = ReturnType<typeof store.getState>;
export default store;
