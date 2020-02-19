import { LangResolveService } from './lang-resolve.service';
import { DateFormatService } from './date-format.service';
import { IconRegistryService } from './icon-registry.service';
import { MatDialogService } from './mat-dialog.service';

export const SHARED_SERVICES = [
  LangResolveService,
  DateFormatService,
  IconRegistryService,
  MatDialogService
];

export * from './lang-resolve.service';
export * from './date-format.service';
export * from './icon-registry.service';
export * from './mat-dialog.service';
