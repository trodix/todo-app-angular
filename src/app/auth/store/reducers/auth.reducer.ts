import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../models/user';
import * as AuthActions from '../actions/auth.actions';

export const authFeatureKey = 'authFeature';
export interface State {
  user: User;
  error: Error;
}

const initialState: State = {
  user: null,
  error: null
};

const authReducer = createReducer(
  initialState,

  on(AuthActions.LoginSuccess, (state: State, { user }) => ({ ...initialState, user })),
  on(AuthActions.LoginFailure, (state: State, { error }) => ({ ...initialState, error })),
  on(AuthActions.RefreshTokenSuccess, (state: State, { user }) => ({ ...initialState, user })),
  on(AuthActions.RefreshTokenFailure, (state: State, { error }) => ({ ...initialState, error })),
  on(AuthActions.Logout, () => ({ ...initialState })),
);

export function reducer(state: State | undefined, action: Action): State {
  return authReducer(state, action);
}
