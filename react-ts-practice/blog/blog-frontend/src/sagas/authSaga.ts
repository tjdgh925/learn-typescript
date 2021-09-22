import { call, put, takeLatest } from '@redux-saga/core/effects';
import * as authAPI from '../lib/api/auth';
import {
  login,
  loginSuccess,
  loginFailure,
  register,
  registerSuccess,
  registerFailure,
  check,
  checkSuccess,
  checkFailure,
  logout,
} from '../modules/auth';

function* loginSaga(action: ReturnType<typeof login>) {
  try {
    yield call(authAPI.login, action.payload);
    yield put(loginSuccess(true));
  } catch (e: any) {
    yield put(loginFailure(e));
  }
}

function* registerSaga(action: ReturnType<typeof register>) {
  try {
    yield call(authAPI.register, action.payload);
    yield put(registerSuccess(true));
  } catch (e: any) {
    yield put(registerFailure(e));
  }
}

function* checkSaga() {
  try {
    yield call(authAPI.check);
    yield put(checkSuccess(true));
  } catch (e: any) {
    yield put(checkFailure(e));
    localStorage.removeItem('user');
  }
}
function* logoutSaga() {
  try {
    yield call(authAPI.logout); // logout API 호출
    localStorage.removeItem('user'); // localStorage 에서 user 제거
  } catch (e) {
    console.log(e);
  }
}

export function* authSaga() {
  yield takeLatest(register, registerSaga);
  yield takeLatest(login, loginSaga);
  yield takeLatest(check, checkSaga);
  yield takeLatest(logout, logoutSaga);
}
