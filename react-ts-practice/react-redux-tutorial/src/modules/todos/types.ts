import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type TodosAction = ActionType<typeof actions>;
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}
export interface TodoState extends Array<Todo> {}
