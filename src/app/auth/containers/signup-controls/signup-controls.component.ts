import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { SignupData } from '@auth/models';
import { Signup } from '@auth/actions';
import { LoginStateModel } from '@auth/states';

@Component({
  selector: 'app-signup-controls',
  templateUrl: './signup-controls.component.html',
  styleUrls: ['./signup-controls.component.scss']
})
export class SignupControlsComponent {

  @Input()
  form: FormGroup;

  constructor(private store: Store, private router: Router) { }

  onSubmit(): void {
    const data = this.form.value as SignupData;
    this.store.dispatch(new Signup(data))
      .subscribe((state: LoginStateModel) => {
        this.router.navigate(['places']);
      });
  }
}
