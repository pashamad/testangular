import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthApiService } from './auth-api.service';
import { LoginData, AuthenticatedUser } from '@auth/models';

@Injectable()
export class LoginService {

  constructor(private api: AuthApiService) { }

  login(data: LoginData): Observable<AuthenticatedUser> {
    return this.api.getClient().post<AuthenticatedUser, LoginData>('rpc/login', {}, data).pipe(
      map(response => response.body),
      // tslint:disable-next-line:no-string-literal
      map(body => body[0]['token']),
      map(token => {

        let user: AuthenticatedUser;

        try {
          user = this.decodeToken(token);
        } catch (e) {
          console.warn(e);
        }

        return user;
      })
    );
  }

  signup(data: LoginData): Observable<AuthenticatedUser> {
    return this.api.getClient().post<AuthenticatedUser, LoginData>('rpc/register', {}, data).pipe(
      map(response => response.body),
      // tslint:disable-next-line:no-string-literal
      map(body => body[0]['token']),
      map(token => {

        let user: AuthenticatedUser;

        try {
          user = this.decodeToken(token);
        } catch (e) {
          console.warn(e);
        }

        return user;
      })
    );
  }

  private decodeToken(authToken: string): AuthenticatedUser {

    const parts = authToken.split('.');
    const payload = atob(parts[1]);
    const data = JSON.parse(payload);

    return { authToken, ...data } as AuthenticatedUser;
  }
}
