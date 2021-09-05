import { CounterState, CounterAction } from './types';
import { createReducer } from 'typesafe-actions';
import { INCREASE, DECREASE, INCREASE_BY } from './actions';

const initailState: CounterState = {
  count: 0,
};

const reducer = createReducer<CounterState, CounterAction>(initailState, {
  [INCREASE]: (state) => ({ count: state.count + 1 }),
  [DECREASE]: (state) => ({ count: state.count - 1 }),
  [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
});
export default reducer;
