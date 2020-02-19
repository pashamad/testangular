import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { SharedModule } from '@shared/shared.module';
import { FeatureModule } from '@feature/shared/feature.module';
import { PlacesRoutingModule } from './places-routing.module';

import {
  PlacesPageComponent,
  PlacesToolbarComponent,
  AddDialogComponent,
  AddControlsComponent,
  PlaceItemPageComponent
} from './containers';
import {
  PlacesTableComponent,
  AddPlaceFormComponent
} from './components';

import { PlacesService } from './services';
import { PlacesState, AddPlaceState } from './states';
import { MaterialModule } from 'app/material';

@NgModule({
  declarations: [
    PlacesPageComponent,
    PlacesTableComponent,
    PlacesToolbarComponent,
    AddDialogComponent,
    AddPlaceFormComponent,
    AddControlsComponent,
    PlaceItemPageComponent
  ],
  imports: [
    SharedModule,
    FeatureModule,
    MaterialModule,
    PlacesRoutingModule,
    NgxsModule.forFeature([
      PlacesState,
      AddPlaceState
    ])
  ],
  providers: [
    PlacesService
  ],
  entryComponents: [
    AddDialogComponent
  ]
})
export class PlacesModule { }
