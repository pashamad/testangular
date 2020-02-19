import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LoginState, LoginStateModel } from '@auth/states';
import { ResetForms } from '@auth/actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  @Select(LoginState) readonly loginState$: Observable<LoginStateModel>;
  readonly error$ = this.loginState$.pipe(
    map(state => state.loginError)
  );

  constructor(private store: Store) {
    this.store.dispatch(new ResetForms());
  }
}
