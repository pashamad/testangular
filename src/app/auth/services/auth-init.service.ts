import { Injectable } from '@angular/core';

import { AuthStorageService } from './auth-storage.service';
import { ClientFactoryService } from '@api/services';
import { AuthWrapperService } from './auth-wrapper.service';

@Injectable()
export class AuthInitService {

  constructor(private apiFactory: ClientFactoryService, private authWrapper: AuthWrapperService) { }

  init(): Promise<void> {
    // const user = this.authStorage.user;
    // this.store.dispatch(new AuthInit({ user }));
    console.log(`auth init`);
    return new Promise<any>((resolve) => {
      // this.apiFactory.addWrapper(this.authWrapper);
      resolve();
    });
  }
}

export function authInitFactory(service: AuthInitService): () => Promise<void> {
  return () => service.init();
}
