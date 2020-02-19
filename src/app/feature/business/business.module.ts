import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { BusinessRoutingModule } from './business-routing.module';

import {
  BusinessPageComponent,
  RegisterPageComponent,
  RegisterControlsComponent
} from './containers';
import {
  RegisterFormComponent,
  BusinessDetailsComponent
} from './components';

import { RegisterBusinessState } from './states';
import { BusinessService } from './services';

import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    BusinessPageComponent,
    RegisterPageComponent,
    RegisterFormComponent,
    RegisterControlsComponent,
    BusinessDetailsComponent
  ],
  imports: [
    SharedModule,
    BusinessRoutingModule,
    NgxsModule.forFeature([
      RegisterBusinessState
    ])
  ],
  providers: [
    BusinessService
  ]
})
export class BusinessModule { }
