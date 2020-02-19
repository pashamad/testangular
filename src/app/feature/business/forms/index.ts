export * from './forms.model';

import { form as commonPrivate } from './common-private.form';
import { form as commonLegal } from './common-legal.form';
import { form as euPrivate } from './eu-private.form';
import { form as euLegal } from './eu-legal.form';
import { form as ruPrivate } from './ru-private.form';
import { form as ruLegal } from './ru-legal.form';

import { ExtFormDesc } from './forms.model';

export const businessExtForms: { [key: string]: ExtFormDesc } = {
  common: {
    private: commonPrivate,
    legal: commonLegal
  },
  eu: {
    private: euPrivate,
    legal: euLegal
  },
  ru: {
    private: ruPrivate,
    legal: ruLegal
  }
};
