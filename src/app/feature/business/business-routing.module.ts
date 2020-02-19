import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessPageComponent, RegisterPageComponent } from './containers';

import {
  HasBusinessGuard,
  NoBusinessGuard
} from '@feature/shared/services';

const routes: Routes = [
  { path: 'register', component: RegisterPageComponent, canActivate: [NoBusinessGuard] },
  { path: '', component: BusinessPageComponent, canActivate: [HasBusinessGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
