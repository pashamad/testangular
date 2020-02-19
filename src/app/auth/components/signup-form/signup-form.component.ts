import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {

  hidePassword = true;

  readonly form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required, Validators.minLength(2)]),
    pwd: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirm: new FormControl('', [Validators.required])
  });

  constructor() {
    this.confirmControl.valueChanges.subscribe(value => {
      const password: string = this.form.get('pwd').value;
      const confirmPassword: string = this.form.get('confirm').value;
      if (password !== confirmPassword) {
        this.confirmControl.setErrors({ noMatch: true });
      }
    });
  }

  get emailControl(): AbstractControl {
    return this.form.get('email');
  }

  get usernameControl(): AbstractControl {
    return this.form.get('username');
  }

  get pwdControl(): AbstractControl {
    return this.form.get('pwd');
  }

  get confirmControl(): AbstractControl {
    return this.form.get('confirm');
  }
}
