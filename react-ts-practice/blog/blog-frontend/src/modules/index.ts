import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import loginReducer from './auth/login';
import signUpReducer from './auth/signUp';
import userReducer, { check } from './auth/user';
import { all } from 'redux-saga/effects';
import { loginSaga } from '../sagas/loginSaga';
import { signUpSaga } from '../sagas/signUpSaga';
import { userSaga } from '../sagas/userSaga';

const rootReducer = combineReducers({
  login: loginReducer,
  singUp: signUpReducer,
  user: userReducer,
});

function* rootSaga() {
  yield all([loginSaga(), signUpSaga(), userSaga()]);
}
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
});
function loadUser() {
  try {
    const user: any = localStorage.getItem('user');
    if (!user) return;
    store.dispatch(check());
  } catch (e) {
    console.log('error');
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

export type RootState = ReturnType<typeof store.getState>;
export default store;
