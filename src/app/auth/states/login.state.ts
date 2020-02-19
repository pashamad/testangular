import { State, Action, StateContext, Selector } from '@ngxs/store';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { AuthenticatedUser, LoginData, SignupData } from '@auth/models';
import { LoginService } from '@auth/services';
import { Login, Logout, Signup, ResetForms } from '@auth/actions';

import { ErrorResponse } from '@api/models';
import { ClientFactoryService } from '@api/services';
import { AuthWrapperService } from '@auth/services/auth-wrapper.service';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';

export interface LoginStateModel {
  loginData: LoginData | null;
  loginError: ErrorResponse | undefined;
  signupData: SignupData | null;
  signupError: ErrorResponse | undefined;
  user: AuthenticatedUser | null;
}

@State<LoginStateModel>({
  name: 'login',
  defaults: {
    loginData: null,
    loginError: undefined,
    signupData: null,
    signupError: null,
    user: null,
  }
})
export class LoginState {

  constructor(
    private api: LoginService,
    private apiFactory: ClientFactoryService,
    private authWrapper: AuthWrapperService,
    private router: Router,
    private zone: NgZone
  ) {
    this.apiFactory.addWrapper(this.authWrapper);
  }

  @Selector()
  static isAuthenticated(state: LoginStateModel): boolean {
    return !!state.user;
  }

  @Selector()
  static authUser(state: LoginStateModel): AuthenticatedUser {
    return state.user;
  }

  @Action(Login)
  login(ctx: StateContext<LoginStateModel>, action: Login) {
    let state = ctx.getState();
    const loginData = action.payload;
    state = ctx.setState({
      ...state,
      loginData,
      user: null
    });

    return this.api.login(loginData).pipe(
      tap(user => {
        ctx.setState({
          ...state,
          loginData: null,
          loginError: null,
          user
        });
      }),
      catchError((error: ErrorResponse) => {
        ctx.setState({
          ...state,
          loginData: null,
          loginError: error
        });
        return throwError(error);
      })
    );
  }

  @Action(Logout)
  logout(ctx: StateContext<LoginStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      user: null
    });

    this.zone.run(() => {
      this.router.navigate(['login']);
    });
  }

  @Action(Signup)
  signup(ctx: StateContext<LoginStateModel>, action: Signup) {

    let state = ctx.getState();
    const signupData = action.payload;
    state = ctx.setState({
      ...state,
      signupData,
      user: null
    });

    return this.api.signup(signupData).pipe(
      tap(user => {
        ctx.setState({
          ...state,
          signupData: null,
          signupError: null,
          user
        });
      }),
      catchError((error: ErrorResponse) => {
        ctx.setState({
          ...state,
          signupData: null,
          signupError: error,
          user: null
        });
        return throwError(error);
      })
    );
  }

  @Action(ResetForms)
  resetForms(ctx: StateContext<LoginStateModel>) {
    ctx.setState({
      ...ctx.getState(),
      loginData: null,
      loginError: null,
      signupData: null,
      signupError: null
    });
  }
}
