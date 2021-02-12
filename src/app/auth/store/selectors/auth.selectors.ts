import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../../models/user';
import { authFeatureKey, State as AuthState } from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>(authFeatureKey);

export const selectUser = createSelector(
  selectAuthState,
  (state: AuthState) => state.user
);

export const selectAuthError = createSelector(
  selectAuthState,
  (state: AuthState) => state.error
);

export const selectAccessToken = createSelector(
  selectUser,
  (user: User) => user?.accessToken
);

export const selectRefreshToken = createSelector(
  selectUser,
  (user: User) => user?.refreshToken
);
