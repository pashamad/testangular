import { LoginData, SignupData } from '@auth/models';

export class Login {
  static readonly type = '[Auth] Login';
  constructor(public payload: LoginData) { }
}

export class Logout {
  static readonly type = '[Auth] Logout';
}

export class Signup {
  static readonly type = '[Auth] Signup';
  constructor(public payload: SignupData) { }
}

export class ResetForms {
  static readonly type = '[Auth] ResetForms';
}
