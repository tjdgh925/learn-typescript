import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { GithubAction } from './types';
import { getUserProfile } from '../../api/github';
import {
  getUserProfiles,
  getUserProfileError,
  getUserProfileSuccess,
} from './actions';

export const getUserProfileThunk = (
  username: string
): ThunkAction<void, RootState, null, GithubAction> => {
  return async (dispatch) => {
    const request = getUserProfiles;
    const success = getUserProfileSuccess;
    const failure = getUserProfileError;
    dispatch(request(username));
    try {
      const userProfile = await getUserProfile(username);
      dispatch(success(userProfile));
    } catch (e: any) {
      dispatch(failure(e));
    }
  };
};
