import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { loginData, loginState } from '../../types/types';

const initialState: loginState = {
  error: {
    loading: false,
    error: null,
  },
  auth: false,
  data: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state, action: PayloadAction<loginData>) {
      state.error.loading = true;
      state.error.error = null;
      state.auth = false;
      state.data = action.payload;
    },
    loginSuccess(state, action: PayloadAction<boolean>) {
      state.error.loading = false;
      state.error.error = null;
      state.auth = true;
    },
    loginFailure(state, action: PayloadAction<AxiosError>) {
      state.error.loading = false;
      state.error.error = action.payload;
      state.auth = false;
    },
  },
});

export const { login, loginSuccess, loginFailure } = loginSlice.actions;

export default loginSlice.reducer;
