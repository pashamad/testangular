import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LoginState, LoginStateModel } from '@auth/states';
import { ResetForms } from '@auth/actions';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {

  @Select(LoginState) readonly loginState$: Observable<LoginStateModel>;
  readonly error$ = this.loginState$.pipe(
    map(state => state.signupError)
  );

  constructor(private store: Store) {
    this.store.dispatch(new ResetForms());
  }
}
