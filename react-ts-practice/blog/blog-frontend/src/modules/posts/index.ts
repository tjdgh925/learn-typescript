import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { postData, postState } from '../../types/types';

interface changeProps {
  key: string;
  value: string | string[];
}
const initialData: postData = {
  title: '',
  body: '',
  tags: [],
};
const initialState: postState = {
  error: {
    loading: false,
    error: null,
  },
  data: initialData,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    initialize(state) {
      state = initialState;
    },
    updatePost(state, action: PayloadAction<postData>) {
      state.data = action.payload;
    },
  },
});

export const { initialize, updatePost } = postSlice.actions;

export default postSlice.reducer;
