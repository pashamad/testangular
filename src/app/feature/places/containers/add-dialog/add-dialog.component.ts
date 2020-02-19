import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AddPlaceState, AddPlaceStateModel } from '@feature/places/states';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent {

  static readonly DIALOG_ID = 'addPlace';

  @Select(AddPlaceState) state$: Observable<AddPlaceStateModel>;
  readonly isPending$ = this.state$.pipe(
    map(state => state && state.isPending)
  );

  readonly form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    lat: new FormControl('', [Validators.required]),
    lng: new FormControl('', [Validators.required])
  });

  constructor(private store: Store) { }
}
