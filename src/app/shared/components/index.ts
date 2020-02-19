import { SpinnerComponent } from './spinner/spinner.component';
import { FormErrorComponent } from './form-error/form-error.component';
import { FormMessageComponent } from './form-message/form-message.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { BrowserInfoComponent } from './browser-info/browser-info.component';

export const SHARED_COMPONENTS = [
  SpinnerComponent,
  FormErrorComponent,
  FormMessageComponent,
  SnackBarComponent,
  BrowserInfoComponent
];

export const ENTRY_COMPONENTS = [
  SnackBarComponent
];

export * from './spinner/spinner.component';
export * from './form-error/form-error.component';
export * from './form-message/form-message.component';
export * from './snack-bar/snack-bar.component';
export * from './browser-info/browser-info.component';
