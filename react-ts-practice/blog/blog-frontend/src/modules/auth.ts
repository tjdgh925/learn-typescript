import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

export interface authState {}

const initialState: authState = {};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    //로그인, 로그아웃, 회원가입,
  },
});

export const {
  /*로그인, 로그아웃, 회원가입*/
} = authSlice.actions;
export default authSlice.reducer;
