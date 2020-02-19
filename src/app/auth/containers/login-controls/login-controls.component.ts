import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';

import { LoginData } from '@auth/models';
import { Login } from '@auth/actions';
import { LoginStateModel } from '@auth/states';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-controls',
  templateUrl: './login-controls.component.html',
  styleUrls: ['./login-controls.component.scss']
})
export class LoginControlsComponent {

  @Input()
  form: FormGroup;

  constructor(private store: Store, private router: Router) { }

  onSubmit(): void {
    const data = this.form.value as LoginData;
    this.store.dispatch(new Login(data))
      .subscribe((state: LoginStateModel) => {
        this.router.navigate(['places']);
      });
  }
}
