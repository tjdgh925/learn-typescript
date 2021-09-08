import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase(state) {
      state.count += 1;
    },
    decrease(state) {
      state.count -= 1;
    },
    increaseBy(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
  },
});

export const { increase, decrease, increaseBy } = counterSlice.actions;
export default counterSlice.reducer;
