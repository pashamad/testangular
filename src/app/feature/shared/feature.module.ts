import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import {
  DataApiService,
  RpcApiService,
  BusinessResolverService,
  HasBusinessGuard,
  UserBusinessService,
  NoBusinessGuard
} from './services';
import { UserBusinessState } from './states';

@NgModule({
  declarations: [],
  imports: [
    NgxsModule.forFeature([
      UserBusinessState
    ])
  ]
})
export class FeatureModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FeatureModule,
      providers: [
        DataApiService,
        RpcApiService,
        BusinessResolverService,
        HasBusinessGuard,
        NoBusinessGuard,
        UserBusinessService
      ]
    };
  }
}
