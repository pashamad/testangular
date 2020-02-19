import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class BusinessResolverService {

  /**
   * @deprecated
   */
  constructor(private store: Store, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | undefined {
    return of(false);
  }
}
