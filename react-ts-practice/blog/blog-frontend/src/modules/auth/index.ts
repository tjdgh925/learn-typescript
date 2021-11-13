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

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<loginData>) {
      state.error.loading = true;
      state.error.error = null;
      state.auth = null;
      state.data = action.payload;
    },
    loginSuccess(state, action: PayloadAction<boolean>) {
      state.error.loading = false;
      state.error.error = null;
      state.auth = action.payload;
    },
    loginFailure(state, action: PayloadAction<AxiosError>) {
      state.error.loading = false;
      state.error.error = action.payload;
      state.auth = false;
    },
    register(state, action: PayloadAction<signUpData>) {
      state.error.loading = true;
      state.error.error = null;
      state.auth = null;
      state.data = action.payload;
    },
    registerSuccess(state, action: PayloadAction<boolean>) {
      state.error.loading = false;
      state.error.error = null;
      state.auth = action.payload;
    },
    registerFailure(state, action: PayloadAction<AxiosError>) {
      state.error.loading = false;
      state.error.error = action.payload;
      state.auth = false;
    },
    tempSetUser(state, action: PayloadAction<loginData>) {
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

export const {
  login,
  loginSuccess,
  loginFailure,
  register,
  registerSuccess,
  registerFailure,
  tempSetUser,
  check,
  checkSuccess,
  checkFailure,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
