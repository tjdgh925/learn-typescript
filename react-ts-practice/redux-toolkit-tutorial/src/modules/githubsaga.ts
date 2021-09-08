import { request, success, failure } from './github';
import { getUserProfile, GithubProfile } from '../api/github';
import { call, put, takeEvery } from 'redux-saga/effects';

function* getUserProfileSaga(action: ReturnType<typeof request>) {
  try {
    const userProfile: GithubProfile = yield call(
      getUserProfile,
      action.payload
    );
    yield put(success(userProfile));
  } catch (e: any) {
    yield put(failure(e));
  }
}

export function* githubSaga() {
  yield takeEvery(request, getUserProfileSaga);
}
