import { NgModule, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import {
  ClientFactoryService,
  ContentTypeWrapperService,
  PreferParamsWrapperService,
  ErrorInterceptor
} from './services';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ]
})
export class ApiModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        ClientFactoryService,
        ContentTypeWrapperService,
        PreferParamsWrapperService,
        ErrorInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorInterceptor,
          multi: true
        }
      ]
    };
  }
}
