import { FormControl } from '@angular/forms';

import { FormGroupDesc } from './forms.model';

export const form: FormGroupDesc = {
  INN: {
    label: 'INN',
    control: new FormControl('', []),
    required: true,
    errors: {
      required: 'INN required'
    }
  }
};
