import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { signUpData, signUpState } from '../../types/types';

const initialState: signUpState = {
  error: {
    loading: false,
    error: null,
  },
  data: null,
};

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    register(state, action: PayloadAction<signUpData>) {
      state.error.loading = true;
      state.error.error = null;
      state.data = action.payload;
    },
    registerSuccess(state, action: PayloadAction<boolean>) {
      state.error.loading = false;
      state.error.error = null;
    },
    registerFailure(state, action: PayloadAction<AxiosError>) {
      state.error.loading = false;
      state.error.error = action.payload;
    },
  },
});

export const { register, registerSuccess, registerFailure } =
  signUpSlice.actions;

export default signUpSlice.reducer;
