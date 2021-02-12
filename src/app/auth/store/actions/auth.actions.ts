import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user';
import { RefreshTokenRequest } from '../../models/refresh-token-request';

enum AuthActionTypes {
  LOGIN = '[Login Page] Login',
  LOGIN_SUCCESS = '[Auth API] Login Success',
  LOGIN_FAILURE = '[Auth API] Login Failure',
  REFRESH_TOKEN = '[Auth] Refresh Token',
  REFRESH_TOKEN_SUCCESS = '[Auth API] Refresh Token Success',
  REFRESH_TOKEN_FAILURE = '[Auth API] Refresh Token Failure',
  LOGOUT = '[Auth] Logout',
  LOGOUT_SUCCESS = '[Auth API] Logout Success',
  LOGOUT_FAILURE = '[Auth API] Logout Failure',
}

export const Login = createAction(
  AuthActionTypes.LOGIN,
  props<{ user: User }>()
);

export const LoginSuccess = createAction(
  AuthActionTypes.LOGIN_SUCCESS,
  props<{ user: User }>()
);

export const LoginFailure = createAction(
  AuthActionTypes.LOGIN_FAILURE,
  props<{ error: Error }>()
);

export const RefreshToken = createAction(
  AuthActionTypes.REFRESH_TOKEN,
  props<{ refreshTokenRequest: RefreshTokenRequest }>()
);

export const RefreshTokenSuccess = createAction(
  AuthActionTypes.REFRESH_TOKEN_SUCCESS,
  props<{ user: User }>()
);

export const RefreshTokenFailure = createAction(
  AuthActionTypes.REFRESH_TOKEN_FAILURE,
  props<{ error: Error }>()
);

export const Logout = createAction(
  AuthActionTypes.LOGOUT
);

export const LogoutSuccess = createAction(
  AuthActionTypes.LOGOUT_SUCCESS
);

export const LogoutFailure = createAction(
  AuthActionTypes.LOGOUT_FAILURE
);
