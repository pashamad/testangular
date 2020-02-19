import { FormControl } from '@angular/forms';

export interface FormControlDesc {
  control: FormControl;
  label: string;
  type?: string;
  required?: boolean;
  errors?: { [key: string]: string };
}

export interface FormGroupDesc {
  [key: string]: FormControlDesc;
}

export interface ExtFormDesc {
  [key: string]: FormGroupDesc;
}
