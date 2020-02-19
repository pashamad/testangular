import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { RequestWrapper } from '@api/helpers';
import { AuthenticatedUser } from '@auth/models';

@Injectable()
export class AuthWrapperService implements RequestWrapper {

  user$: Observable<AuthenticatedUser>;

  constructor(private store: Store) {
    this.user$ = this.store.select(state => state.login.user);
  }

  getKey(): string {
    return 'authHeader';
  }

  wrapRequest<T = any>(request: HttpRequest<T>): Observable<HttpRequest<T>> {
    return this.user$.pipe(
      take(1),
      map(user => {
        const update = user
          ? request.headers.set('Authorization', `Bearer ${user.authToken}`)
          : request.headers.delete('Authorization');
        return request.clone({ headers: update });
      })
    );
  }
}
