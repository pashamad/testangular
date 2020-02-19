import { MatDialogService } from '@shared/services';
import { Action, State, StateContext } from '@ngxs/store';
import { tap, mergeMap } from 'rxjs/operators';

import * as actions from '../actions';
import { AddDialogComponent } from '../containers/add-dialog/add-dialog.component';
import { PlacesService } from '../services';

export interface AddPlaceStateModel {
  isPending: boolean;
}

@State<AddPlaceStateModel>({
  name: 'addPlace',
  defaults: {
    isPending: false
  }
})
export class AddPlaceState {

  constructor(private dialog: MatDialogService, private api: PlacesService) { }

  /**
   * TODO: move OpenModal action to PlacesState to avoid circular dependency
   */
  @Action(actions.OpenModal)
  openModal() {
    this.dialog.open(AddDialogComponent, {
      data: {},
      id: AddDialogComponent.DIALOG_ID,
      minWidth: 'fit-content'
    });
  }

  @Action(actions.Add)
  addPlace(ctx: StateContext<AddPlaceStateModel>, action: actions.Add) {
    ctx.patchState({
      isPending: true
    });
    return this.api.addPlace(action.payload).pipe(
      tap(() => {
        ctx.patchState({
          isPending: false
        });
      }),
      mergeMap(() => [
        ctx.dispatch(new actions.CloseModal()),
        ctx.dispatch(new actions.Load())
      ])
    );
  }

  @Action(actions.CloseModal)
  closeModal() {
    this.dialog.close(AddDialogComponent.DIALOG_ID);
  }
}
