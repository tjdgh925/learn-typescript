import user, {
  tempSetUser,
  checkSuccess,
  checkFailure,
  logout,
  check,
} from '../modules/auth/user';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { signUpData, loginData } from '../types/types';
import axios from 'axios';

const tempData: loginData = JSON.parse(localStorage.getItem('user') || '{}');

function checkAPI(temp: signUpData | loginData) {
  return axios.get('/api/auth/check');
}
function* tryCheckSaga() {
  try {
    yield call(checkAPI, tempData);
    yield put(checkSuccess(true));
  } catch (e: any) {
    yield put(checkFailure(e));
    localStorage.removeItem('user');
  }
}
function logoutAPI() {
  return axios.get('/api/auth/logout');
}
function* logoutSaga() {
  try {
    yield call(logoutAPI); // logout API 호출
    localStorage.removeItem('user'); // localStorage 에서 user 제거
  } catch (e) {
    console.log(e);
  }
}

export function* userSaga() {
  yield takeEvery(check, tryCheckSaga);
  yield takeLatest(logout, logoutSaga);
}
