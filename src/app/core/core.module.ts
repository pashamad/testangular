import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '@shared/shared.module';

import {
  MainComponent,
  NotFoundComponent,
  VersionComponent
} from './containers';
import {
  FooterComponent,
  ToolbarComponent,
  NavbarComponent,
  NavItemComponent
} from './components';

@NgModule({
  declarations: [
    NotFoundComponent,
    VersionComponent,
    MainComponent,
    FooterComponent,
    ToolbarComponent,
    NavbarComponent,
    NavItemComponent
  ],
  exports: [
    MainComponent,
    NotFoundComponent,
    VersionComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModule
  ]
})
export class CoreModule { }
