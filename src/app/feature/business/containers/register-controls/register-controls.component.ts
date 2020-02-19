import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';

import * as actions from '@feature/business/actions';
import { RegisterBusinessData } from '@feature/business/models';

@Component({
  selector: 'app-business-register-controls',
  templateUrl: './register-controls.component.html',
  styleUrls: ['./register-controls.component.scss']
})
export class RegisterControlsComponent implements OnInit {

  @Input()
  form: FormGroup;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  onRegisterClick(): void {
    const data = this.form.value as RegisterBusinessData;

    console.log(this.form.value);
    this.store.dispatch(new actions.Register(data));
  }
}
