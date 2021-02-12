import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, map, switchMap, take, tap } from 'rxjs/operators';
import * as AuthActions from '../auth/store/actions/auth.actions';
import { AuthService } from './auth.service';
import { State as AuthState } from './store/reducers/auth.reducer';
import { selectAccessToken, selectRefreshToken } from './store/selectors/auth.selectors';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store$: Store<AuthState>, private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store$.select(selectAccessToken)
      .pipe(
        take(1),
        map(token =>
          token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req
        ),
        switchMap(request =>
          next.handle(request)
            .pipe(
              catchError(error => this.handleError(request, next, error))
            )
        )
      );
  }

  private handleError(req: HttpRequest<any>, next: any, error: HttpErrorResponse): Observable<HttpEvent<any>> {
    // Error 401 when token is invalid or user authentication fail
    if (error.status === 401) {
      if (req.headers && req.headers.has('Authorization')) {
        return this.store$.select(selectAccessToken).pipe(
          filter(accessToken => !!accessToken),
          take(1),
          map(accessToken => this.authService.decodeJWT(accessToken)),
          map(accessTokenPayload => accessTokenPayload.sub),
          switchMap((username) => this.store$.select(selectRefreshToken).pipe(
            take(1),
            tap(refreshToken => {
              if (refreshToken && username) {
                this.store$.dispatch(AuthActions.RefreshToken(
                  { refreshTokenRequest: { username, refreshToken } }
                ));
              } else {
                this.store$.dispatch(AuthActions.Logout());
              }
            }),
            switchMap(() => this.intercept(req, next))
          ))
        );
      } else {
        this.store$.dispatch(AuthActions.Logout());
      }
    }

    return throwError(error);
  }

}
