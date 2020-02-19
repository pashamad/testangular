import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { FormError } from '@shared/models';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormErrorComponent {

  @Input()
  error: FormError;
}
