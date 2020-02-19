import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { Observable, combineLatest } from 'rxjs';
import { take, tap, map, filter } from 'rxjs/operators';

import { LoadUserBusiness } from '@feature/shared/actions';
import { UserBusinessState } from '@feature/shared/states';
import { UserBusiness } from '@feature/shared/models';

@Injectable()
export class NoBusinessGuard {

  @Select(UserBusinessState.isPending)
  isPending$: Observable<boolean>;

  @Select(UserBusinessState.userBusiness)
  userBusiness$: Observable<UserBusiness>;

  constructor(private store: Store, private router: Router) {
    this.store.dispatch(new LoadUserBusiness());
  }

  canActivate(): Observable<boolean> {
    return combineLatest([this.isPending$, this.userBusiness$]).pipe(
      filter(([isPending]) => !isPending),
      map(([, userBusiness]) => userBusiness),
      map(business => !business),
      tap(noBusiness => {
        if (!noBusiness) {
          this.router.navigate(['business']);
        }
      }),
      take(1)
    );
  }
}
