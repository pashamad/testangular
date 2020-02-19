import { RegisterBusinessData } from '@feature/business/models';

export class Register {
  static readonly type = '[Business.Register] Register';
  constructor(public payload: RegisterBusinessData) { }
}
