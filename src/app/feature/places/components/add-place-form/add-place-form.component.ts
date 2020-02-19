import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-add-place-form',
  templateUrl: './add-place-form.component.html',
  styleUrls: ['./add-place-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPlaceFormComponent {

  @Input()
  form: FormGroup;

  getControl(name: string): AbstractControl {
    return this.form.get(name);
  }
}
