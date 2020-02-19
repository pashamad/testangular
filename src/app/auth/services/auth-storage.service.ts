import { Injectable } from '@angular/core';

import { AuthenticatedUser } from '@auth/models';

@Injectable()
export class AuthStorageService {

  readonly storageKey = 'auth.user';
  private _user: AuthenticatedUser;

  constructor() {
    const userStr = localStorage.getItem(this.storageKey);
    if (userStr) {
      this._user = JSON.parse(userStr);
    }
  }

  get user(): AuthenticatedUser {
    return this._user;
  }

  saveUser(user: AuthenticatedUser): void {
    const userStr = JSON.stringify(user);
    localStorage.setItem(this.storageKey, userStr);
    this._user = user;
  }

  destroy(): void {
    this._user = undefined;
    localStorage.removeItem(this.storageKey);
  }
}
