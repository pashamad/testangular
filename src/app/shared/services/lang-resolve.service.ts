import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';

import { Lang } from '@shared/models';
import { LangState } from '@shared/states';

@Injectable()
export class LangResolveService implements Resolve<Lang> {

  @Select(LangState.selected) readonly lang$: Observable<Lang | null>;

  constructor(private store: Store) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Lang> {
    return this.lang$.pipe(
      tap(lang => console.log(lang)),
      filter(lang => !!lang),
      take(1)
    );
  }
}
