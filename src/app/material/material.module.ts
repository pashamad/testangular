import { NgModule } from '@angular/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import {
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatRadioModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatTooltipModule,
  DateAdapter,
  MatSnackBarModule,
  MatTabsModule,
  MatSortModule,
  MatFormFieldModule,
  MatMenuModule,
  MAT_LABEL_GLOBAL_OPTIONS
} from '@angular/material';
import { AppDateAdapter } from './date.adapter';

const MATERIAL_MODULES = [
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatRadioModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule,
  MatDatepickerModule,
  MatMomentDateModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatTabsModule,
  MatSortModule,
  MatFormFieldModule,
  MatMenuModule
];

@NgModule({
  exports: [
    ...MATERIAL_MODULES
  ],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } }
  ]
})
export class MaterialModule { }
