import { call, put, takeLatest } from '@redux-saga/core/effects';
import * as postAPI from '../lib/api/posts';
import {
  writePost,
  writePostSuccess,
  writePostFailure,
} from '../modules/posts';
import { PostSuccessData } from '../types/types';

function* writePostSaga(action: ReturnType<typeof writePost>) {
  try {
    const response: PostSuccessData = yield call(
      postAPI.writePost,
      action.payload
    );
    yield put(writePostSuccess(response));
  } catch (e: any) {
    yield put(writePostFailure(e));
  }
}

export function* postSaga() {
  yield takeLatest(writePost, writePostSaga);
}
