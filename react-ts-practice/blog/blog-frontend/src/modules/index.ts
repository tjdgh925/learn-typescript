import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import loginReducer from './auth/login';
import signUpReducer from './auth/signUp';
import { all } from 'redux-saga/effects';
import { loginSaga } from '../sagas/loginSaga';

const rootReducer = combineReducers({
  login: loginReducer,
  singUp: signUpReducer,
});

function* rootSaga() {
  yield all([loginSaga()]);
}
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export default store;
