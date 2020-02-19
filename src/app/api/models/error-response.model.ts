import { FormError } from '@shared/models';

export interface ErrorResponse extends FormError {
  httpStatusCode: number;
  details: string;
  hint: string;
  devMessage?: string;
}
