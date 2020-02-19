import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  LoginPageComponent,
  SignupPageComponent
} from './containers';

const routes: Routes = [
  {
    path: 'login', component: LoginPageComponent, resolve: {
      // TODO: lang resolver
      // lang: LangResolveService
    }
  },
  {
    path: 'signup', component: SignupPageComponent, resolve: {}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class AuthRoutingModule { }
