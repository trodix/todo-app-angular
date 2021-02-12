import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, skipWhile } from 'rxjs/operators';
import { State as AuthState } from './store/reducers/auth.reducer';
import { selectAuthState } from './store/selectors/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private store$: Store<AuthState>) { }

  canActivate(): Observable<boolean> {
    return this.store$.select(selectAuthState)
      .pipe(
        map(state => {
          if (!!state.error) {
            // Auth error
            return false;
          } else if (!!state.user && !!state.user.accessToken) {
            // Access granted
            return true;
          }
          return false;
        })
      );
  }

  canActivateChild(): Observable<boolean> {
    return this.canActivate();
  }

}
