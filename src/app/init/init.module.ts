import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AuthInitService, authInitFactory } from '@auth/services';
import { IconRegistryService, iconsInitFactory } from '@shared/services';
import { AuthModule } from '@auth/auth.module';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  imports: [
    // AuthModule,
    // NgxsModule.forFeature([])
  ],
  providers: [
    // { provide: APP_INITIALIZER, useFactory: authInitFactory, deps: [AuthInitService], multi: true },
    { provide: APP_INITIALIZER, useFactory: iconsInitFactory, deps: [IconRegistryService], multi: true },
    // { provide: APP_INITIALIZER, useFactory: currencyInitFactory, deps: [CurrencyInitService], multi: true }
  ]
})
export class InitModule { }
