import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';

import * as actions from '../../actions';
import { AddPlaceModel } from '../../models';

@Component({
  selector: 'app-add-place-controls',
  templateUrl: './add-controls.component.html',
  styleUrls: ['./add-controls.component.scss']
})
export class AddControlsComponent implements OnInit {

  @Input()
  form: FormGroup;

  constructor(private store: Store, private _cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.form.statusChanges.subscribe(() => {
      // this._cdr.markForCheck();
    });
  }

  onAddClick(): void {
    const data = this.form.value as AddPlaceModel;
    this.store.dispatch(new actions.Add(data));
  }
}
