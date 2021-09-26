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
    initialize(state, action: PayloadAction<any>) {
      state = initialState;
    },
    changeField(
      state,
      action: PayloadAction<postData>
      // action: PayloadAction<changeProps>
    ) {
      state.data = action.payload;
    },
    /*
    {
      switch (action.payload.key) {
        case 'title':
          if (typeof action.payload.value === 'string')
          state.data.title = action.payload.value;
          break;
          case 'body':
            if (typeof action.payload.value === 'string')
            state.data.body = action.payload.value;
            break;
            case 'tags':
              if (typeof action.payload.value !== 'string')
              state.data.tags = action.payload.value;
              break;
              default:
              }
            },
              */
  },
});

export const { initialize, changeField } = postSlice.actions;

export default postSlice.reducer;
