import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as actions from '@feature/places/actions';
import { PlacesStateModel, PlacesState } from '@feature/places/states';

@Component({
  selector: 'app-places-page',
  templateUrl: './places-page.component.html',
  styleUrls: ['./places-page.component.scss']
})
export class PlacesPageComponent implements OnInit {

  @Select(PlacesState) state$: Observable<PlacesStateModel>;
  readonly places$ = this.state$.pipe(
    map(state => state.places)
  );

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(actions.Load);
  }
}
