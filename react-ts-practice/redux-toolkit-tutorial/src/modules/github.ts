import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { GithubProfile } from '../api/github';

export interface GithubState {
  userProfile: {
    loading: boolean;
    error: Error | null;
    data: GithubProfile | null;
  };
}

const initialState: GithubState = {
  userProfile: {
    loading: false,
    error: null,
    data: null,
  },
};

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    request(state, action: PayloadAction<string>) {
      state.userProfile.loading = true;
      state.userProfile.error = null;
      state.userProfile.data = null;
    },
    success(state, action: PayloadAction<GithubProfile>) {
      state.userProfile.loading = false;
      state.userProfile.error = null;
      state.userProfile.data = action.payload;
    },
    failure(state, action: PayloadAction<AxiosError>) {
      state.userProfile.loading = false;
      state.userProfile.error = action.payload;
      state.userProfile.data = null;
    },
  },
});

export const { request, success, failure } = githubSlice.actions;

export default githubSlice.reducer;
