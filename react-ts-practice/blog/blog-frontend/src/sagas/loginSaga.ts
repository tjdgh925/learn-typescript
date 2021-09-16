import { login, loginSuccess, loginFailure } from '../modules/auth/login';
import { call, put, takeEvery } from 'redux-saga/effects';
import { loginData } from '../types/types';
import axios from 'axios';

function logInAPI(loginData: loginData) {
  return axios.post('/api/auth/login', loginData);
}
function* tryLoginSaga(action: ReturnType<typeof login>) {
  try {
    const userData: loginData = yield call(logInAPI, action.payload);
    yield put(loginSuccess(true));
  } catch (e: any) {
    yield put(loginSuccess(e));
  }
}

export function* loginSaga() {
  yield takeEvery(login, tryLoginSaga);
}
