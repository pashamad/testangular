import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import * as actions from '../../actions';

@Component({
  selector: 'app-places-toolbar',
  templateUrl: './places-toolbar.component.html',
  styleUrls: ['./places-toolbar.component.scss']
})
export class PlacesToolbarComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
  }

  onAddClick(): void {
    this.store.dispatch(new actions.OpenModal());
  }
}
