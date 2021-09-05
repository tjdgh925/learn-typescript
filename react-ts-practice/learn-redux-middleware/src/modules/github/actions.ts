import { createAction } from 'typesafe-actions';
import { GithubProfile } from '../../api/github';
import { AxiosError } from 'axios';

export const GET_USER_PROFILE = 'github/GET_USER_PROFILE';
export const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR';

export const getUserProfiles = createAction(GET_USER_PROFILE)();
export const getUserProfileSuccess = createAction(
  GET_USER_PROFILE_SUCCESS
)<GithubProfile>();
export const getUserProfileError = createAction(
  GET_USER_PROFILE_ERROR
)<AxiosError>();
