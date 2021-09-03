import { createAction, ActionType, createReducer } from 'typesafe-actions';

// const INCREASE = 'counter/INCREASE' as const;
// const DECREASE = 'counter/DECREASE' as const;
// const INCREASE_BY = 'counter/INCREASE_BY' as const;

// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
// export const increasedBy = (diff: number) => ({
//   type: INCREASE_BY,
//   payload: diff,
// });
// type CounterAction =
//   | ReturnType<typeof increase>
//   | ReturnType<typeof decrease>
//   | ReturnType<typeof increasedBy>;

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const increasedBy = createAction(INCREASE_BY)<number>();

const actions = { increase, decrease, increasedBy };
type CounterAction = ActionType<typeof actions>;

interface CounterState {
  count: number;
}
const initialState: CounterState = {
  count: 0,
};

//
// const counter = createReducer<CounterState, CounterAction>(initialState, {
//   [INCREASE]: (state) => ({ count: state.count + 1 }),
//   [DECREASE]: (state) => ({ count: state.count - 1 }),
//   [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
// });

//메서드체이닝 방식
const counter = createReducer<CounterState, CounterAction>(initialState)
  .handleAction(increase, (state) => ({ count: state.count + 1 }))
  .handleAction(decrease, (state) => ({ count: state.count - 1 }))
  .handleAction(increasedBy, (state, action) => ({
    count: state.count + action.payload,
  }));

export default counter;
