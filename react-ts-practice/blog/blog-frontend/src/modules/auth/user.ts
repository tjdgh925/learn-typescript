import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import {
  loginData,
  loginState,
  signUpData,
  signUpState,
} from '../../types/types';

const initialState: loginState | signUpState = {
  error: {
    loading: false,
    error: null,
  },
  auth: null,
  data: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    tempSetUser(state, action: PayloadAction<loginData | signUpData>) {
      state.error.loading = true;
      state.error.error = null;
      state.auth = null;
      state.data = action.payload;
    },
    check(state) {
      state.error.loading = true;
      state.error.error = null;
      state.auth = null;
    },
    checkSuccess(state, action: PayloadAction<boolean>) {
      state.error.loading = false;
      state.error.error = null;
      state.auth = action.payload;
    },
    checkFailure(state, action: PayloadAction<AxiosError>) {
      state.error.loading = false;
      state.error.error = action.payload;
      state.auth = false;
    },
    logout(state) {
      state.error.loading = false;
      state.data = null;
      state.auth = false;
    },
  },
});

export const { tempSetUser, check, checkSuccess, checkFailure, logout } =
  userSlice.actions;

export default userSlice.reducer;
