import { State, Action, StateContext, Selector } from '@ngxs/store';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { ErrorResponse } from '@api/models';

import * as actions from '@feature/shared/actions';
import { UserBusiness } from '@feature/shared/models';
import { UserBusinessService } from '@feature/shared/services';
import { Router } from '@angular/router';

export interface UserBusinessStateModel {
  isPending: boolean;
  business: UserBusiness | null;
  loadError?: ErrorResponse;
}

@State<UserBusinessStateModel>({
  name: 'userBusiness',
  defaults: {
    isPending: false,
    business: null
  }
})
export class UserBusinessState {

  @Selector()
  static isPending(state: UserBusinessStateModel): boolean {
    return state.isPending;
  }

  @Selector()
  static userBusiness(state: UserBusinessStateModel): UserBusiness | null {
    return state.business;
  }

  constructor(private api: UserBusinessService, private router: Router) { }

  @Action(actions.LoadUserBusiness)
  load(ctx: StateContext<UserBusinessStateModel>) {

    // TODO: stop loading if already loaded or is pending

    const state = ctx.getState();
    ctx.setState({
      ...state,
      isPending: true,
      loadError: null
    });

    return this.api.load().pipe(
      tap(business => {
        ctx.setState({
          ...state,
          isPending: false,
          business
        });
        return business;
      }),
      catchError((error: ErrorResponse) => {
        ctx.setState({
          ...state,
          isPending: false,
          loadError: error
        });
        return of(error);
      })
    );
  }
}
