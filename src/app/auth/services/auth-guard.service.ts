import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap, take } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  isAuthenticated$: Observable<boolean>;

  constructor(private store: Store, private router: Router) {
    this.isAuthenticated$ = this.store.select((state) => {
      return !!state.login.user;
    });
  }

  canActivate(): Observable<boolean> {
    return this.isAuthenticated$.pipe(
      tap(auth => {
        if (!auth) {
          this.router.navigate(['login']);
        }
      }),
      take(1)
    );
  }
}
