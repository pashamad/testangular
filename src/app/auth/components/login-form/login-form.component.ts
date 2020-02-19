import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {

  hidePassword = true;

  readonly form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pwd: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  get emailControl(): AbstractControl {
    return this.form.get('email');
  }

  get pwdControl(): AbstractControl {
    return this.form.get('pwd');
  }
}
