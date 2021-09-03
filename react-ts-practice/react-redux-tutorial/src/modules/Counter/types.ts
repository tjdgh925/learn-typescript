import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type CounterAction = ActionType<typeof actions>;

export interface CounterState {
  count: number;
}
