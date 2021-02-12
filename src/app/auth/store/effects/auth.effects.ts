import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, skip, skipUntil, skipWhile, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../../auth.service';
import { RefreshTokenRequest } from '../../models/refresh-token-request';
import { User } from '../../models/user';
import { StorageService } from '../../storage.service';
import * as AuthActions from '../actions/auth.actions';

@Injectable()
export class AuthEffects {

  constructor(
    private router: Router,
    private actions$: Actions,
    private authService: AuthService,
    private storageService: StorageService
  ) { }

  initializeStoredToken$ = createEffect(() => this.actions$.pipe(
    ofType(ROOT_EFFECTS_INIT),
    switchMap(() => this.authService.getAuthTokenPair()),
    switchMap(authTokenPair => {
      if (!authTokenPair) {
        return of(AuthActions.Logout()); // FIXME dispatch Logout
      } else {
        return of(authTokenPair).pipe(
          map(authTokenPair => ({
            username: this.authService.decodeJWT(authTokenPair?.accessToken)?.sub,
            refreshToken: authTokenPair?.refreshToken
          })),
          map((refreshTokenRequest: RefreshTokenRequest) => AuthActions.RefreshToken({ refreshTokenRequest }))
        );
      }
    })
  ));


  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.Login),
    exhaustMap(
      ({ user }) => this.authService.login(user)
        .pipe(
          map((response: User) => AuthActions.LoginSuccess({ user: response })),
          catchError((error: Error) => of(AuthActions.LoginFailure({ error })))
        )
    )
  ));


  storeAccessToken$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.LoginSuccess),
    tap(
      ({ user }) => this.storageService.setItem('accessToken', user.accessToken)
    ),
    tap(
      ({ user }) => this.storageService.setItem('refreshToken', user.refreshToken)
    )
  ), { dispatch: false });


  redirectionOnSuccessAuth$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.LoginSuccess),
    tap(() => this.router.navigate(['']))
  ), { dispatch: false });


  refreshToken$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.RefreshToken),
    exhaustMap(
      ({ refreshTokenRequest }) =>
        this.authService.refreshToken(refreshTokenRequest)
          .pipe(
            map(user => AuthActions.LoginSuccess({ user })),
            catchError(() => of(AuthActions.Logout()))
          )
    )
  ));


  logout$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.Logout),
    exhaustMap(
      () => this.authService.logout()
        .pipe(
          map(() => AuthActions.LogoutSuccess()),
          catchError(() => of(AuthActions.LogoutFailure()))
        )
    )
  ));

  logoutRedirect$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.LogoutSuccess, AuthActions.LogoutFailure),
    tap(() => {
      sessionStorage.clear();
      this.router.navigate(['auth/login']);
    }),
  ), { dispatch: false });
}
