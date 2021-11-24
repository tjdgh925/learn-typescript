import { call, put, takeLatest } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';
import * as postAPI from '../lib/api/posts';
import {
  // postsList,
  // postsListSuccess,
  // postsListFailure,
  postAllSuccess,
  postAllFailure,
  postAll,
} from '../modules/postsList';
import { PostSuccessData, testData } from '../types/types';

// function* postListSaga(action: ReturnType<typeof postsList>) {
//   try {
//     const response: PostSuccessData[] = yield call(
//       postAPI.postsList,
//       action.payload
//     );
//     yield put(postsListSuccess(response));
//   } catch (e: any) {
//     yield put(postsListFailure(e));
//   }
// }
function* postAllsaga(action: ReturnType<typeof postAll>) {
  try {
    const response: AxiosResponse<any> = yield call(postAPI.postAll);
    yield put(postAllSuccess(response.data));
    const { date } = response.headers;
    localStorage.setItem('date', JSON.stringify(date));
    console.log(date);
  } catch (e: any) {
    yield put(postAllFailure(e));
  }
}
export function* postsListSaga() {
  // yield takeLatest(postsList, postListSaga);
  yield takeLatest(postAll, postAllsaga);
}
