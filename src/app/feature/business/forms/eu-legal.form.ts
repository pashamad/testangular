import { FormControl } from '@angular/forms';

import { FormGroupDesc } from './forms.model';

export const form: FormGroupDesc = {
  compNumber: {
    label: 'Company number',
    control: new FormControl('', []),
    required: true,
    errors: {
      required: 'Company number required'
    }
  }
};
