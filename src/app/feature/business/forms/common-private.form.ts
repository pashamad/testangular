import { FormControl } from '@angular/forms';

import { FormGroupDesc } from './forms.model';

export const form: FormGroupDesc = {
  bankAcc: {
    label: 'Bank account',
    control: new FormControl('', []),
    required: true,
    errors: {
      required: 'Bank account required'
    }
  },
  idNumber: {
    label: 'ID/Passport number',
    control: new FormControl('', []),
    required: true,
    errors: {
      required: 'ID/Passport number required'
    }
  }
};
