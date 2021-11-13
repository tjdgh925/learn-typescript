import { call, put, takeLatest } from '@redux-saga/core/effects';
import * as postAPI from '../lib/api/posts';
import {
  postsList,
  postsListSuccess,
  postsListFailure,
} from '../modules/postsList';
import { PostSuccessData } from '../types/types';

function* postListSaga(action: ReturnType<typeof postsList>) {
  try {
    const response: PostSuccessData[] = yield call(
      postAPI.postsList,
      action.payload
    );
    yield put(postsListSuccess(response));
  } catch (e: any) {
    yield put(postsListFailure(e));
  }
}

export function* postsListSaga() {
  yield takeLatest(postsList, postListSaga);
}
