import {
  getUserProfiles,
  getUserProfileSuccess,
  getUserProfileError,
  GET_USER_PROFILE,
} from './actions';
import { getUserProfile, GithubProfile } from '../../api/github';
import { call, put, takeEvery } from 'redux-saga/effects';

function* getUserProfileSaga(action: ReturnType<typeof getUserProfiles>) {
  try {
    const userProfile: GithubProfile = yield call(getUserProfile, action.type);
    yield put(getUserProfileSuccess(userProfile));
  } catch (e: any) {
    yield put(getUserProfileError(e));
  }
}

export function* githubSaga() {
  yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}
