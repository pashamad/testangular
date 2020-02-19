import { Router } from '@angular/router';
import { Action, State, StateContext } from '@ngxs/store';
import { tap, mergeMap } from 'rxjs/operators';

import { MatDialogService } from '@shared/services';

import * as actions from '@feature/business/actions';
import { BusinessService } from '@feature/business/services';

export interface RegisterBusinessStateModel {
  isPending: boolean;
}

@State<RegisterBusinessStateModel>({
  name: 'registerBusiness',
  defaults: {
    isPending: false
  }
})
export class RegisterBusinessState {

  constructor(private dialog: MatDialogService, private api: BusinessService, private router: Router) { }

  @Action(actions.Register)
  addPlace(ctx: StateContext<RegisterBusinessStateModel>, action: actions.Register) {
    ctx.patchState({
      isPending: true
    });
    return this.api.registerBusiness(action.payload).pipe(
      tap(() => {
        ctx.patchState({
          isPending: false
        });
        setTimeout(() => {
          this.router.navigate(['places']);
        });
      }),
      mergeMap(() => [
        // ctx.dispatch(new actions.Load())
      ])
    );
  }
}
