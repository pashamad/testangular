import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  PlacesPageComponent,
  PlaceItemPageComponent
} from './containers';

import { HasBusinessGuard } from '@feature/shared/services';

const routes: Routes = [
  {
    path: ':id', component: PlaceItemPageComponent, canActivate: [HasBusinessGuard]
  },
  {
    path: '', component: PlacesPageComponent, canActivate: [HasBusinessGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class PlacesRoutingModule { }
