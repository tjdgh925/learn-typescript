import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { GithubProfile } from '../../api/github';

export type GithubAction = ActionType<typeof actions>;

export interface GithubState {
  userProfile: {
    loading: boolean;
    error: Error | null;
    data: GithubProfile | null;
  };
}
