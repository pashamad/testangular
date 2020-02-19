import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgxsModule } from '@ngxs/store';

import { SharedModule } from '@shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

import {
  AuthGuard,
  LoginService,
  AuthApiService,
  AuthStorageService,
  AuthInitService
} from './services';
import { AuthWrapperService } from './services/auth-wrapper.service';

import {
  MainComponent,
  LoginPageComponent,
  LoginControlsComponent,
  SignupPageComponent,
  SignupControlsComponent
} from './containers';
import {
  LoginFormComponent,
  SignupFormComponent
} from './components';

import { LoginState } from './states';

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginControlsComponent,
    LoginFormComponent,
    SignupPageComponent,
    SignupControlsComponent,
    SignupFormComponent,
    MainComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule,
    NgxsModule.forFeature([
      LoginState
    ])
  ]
})
export class AuthModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        AuthGuard,
        LoginService,
        AuthApiService,
        AuthStorageService,
        AuthInitService,
        AuthWrapperService,
        LoginState,
        // { provide: APP_INITIALIZER, useFactory: authInitFactory, deps: [AuthInitService], multi: true }
      ]
    };
  }
}
