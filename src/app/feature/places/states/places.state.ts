import { State, Action, StateContext, Select, Selector } from '@ngxs/store';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import * as actions from '@feature/places/actions';
import { PlacesService } from '@feature/places/services';
import { ErrorResponse } from '@api/models';
import { PoiPlace } from '@feature/shared/models';

export interface PlacesStateModel {
  places: PoiPlace[];
  loadError: ErrorResponse | undefined;
}

@State<PlacesStateModel>({
  name: 'places',
  defaults: {
    places: [],
    loadError: undefined
  }
})
export class PlacesState {

  constructor(private api: PlacesService) { }

  @Action(actions.Load)
  loadPlaces(ctx: StateContext<PlacesStateModel>) {

    const state = ctx.getState();

    return this.api.loadPlaces().pipe(
      tap(places => {
        ctx.setState({
          ...state,
          places
        });
        return places;
      }),
      catchError((error: ErrorResponse) => {
        ctx.setState({
          ...state,
          loadError: error
        });
        return of(error);
      })
    );
  }
}
