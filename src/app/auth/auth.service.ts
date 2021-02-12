import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { EMPTY, Observable, of } from 'rxjs';
import { RefreshTokenRequest } from './models/refresh-token-request';
import { User } from './models/user';
import { AuthTokenPair } from './models/auth-token-pair';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private AUTH_URL = 'http://127.0.0.1:8000/api/public/auth';

  constructor(private http: HttpClient, private router: Router, private storageService: StorageService) { }

  decodeJWT(jwtToken: string): JwtPayload {
    return jwt_decode(jwtToken);
  }

  getAuthTokenPair(): Observable<AuthTokenPair> {
    const accessToken: string = this.storageService.getItem('accessToken');
    const refreshToken: string = this.storageService.getItem('refreshToken');
    if (accessToken != null && refreshToken != null) {
      return of({ accessToken, refreshToken });
    }
    return of(null);
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(this.AUTH_URL + '/signin', user);
  }

  refreshToken(refreshTokenRequest: RefreshTokenRequest): Observable<User> {
    return this.http.post<RefreshTokenRequest>(this.AUTH_URL + '/refresh-token', refreshTokenRequest);
  }

  logout(): Observable<object> {
    const refreshToken = JSON.parse(sessionStorage.getItem('refreshToken'));
    if (refreshToken) {
      return this.http.post(this.AUTH_URL + '/logout', {
        refreshToken
      });
    }
    return of(EMPTY);
  }
}
