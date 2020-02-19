import { FormControl } from '@angular/forms';

import { FormGroupDesc } from './forms.model';

export const form: FormGroupDesc = {
  vatNumber: {
    label: 'VAT number',
    control: new FormControl('', [])
  }
};
