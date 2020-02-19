import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { SHARED_SERVICES, MatDialogService } from './services';
import { SHARED_COMPONENTS, ENTRY_COMPONENTS } from './components';
import { MaterialModule } from 'app/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule.forChild(),
    DeviceDetectorModule.forRoot()
  ],
  exports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ReactiveFormsModule,
    MaterialModule,
    ...SHARED_COMPONENTS
  ],
  declarations: [...SHARED_COMPONENTS],
  entryComponents: [...ENTRY_COMPONENTS],
  providers: [
    MatDialogService
  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ...SHARED_SERVICES
      ]
    };
  }
}
