import {
  register,
  registerSuccess,
  registerFailure,
} from '../modules/auth/signUp';
import { call, put, takeEvery } from 'redux-saga/effects';
import { signUpData } from '../types/types';
import axios from 'axios';

function registerAPI(signUpData: signUpData) {
  return axios.post('/api/auth/register', signUpData);
}
function* trySignUpSaga(action: ReturnType<typeof register>) {
  try {
    yield call(registerAPI, action.payload);
    yield put(registerSuccess(true));
  } catch (e: any) {
    yield put(registerFailure(e));
  }
}

export function* signUpSaga() {
  yield takeEvery(register, trySignUpSaga);
}
