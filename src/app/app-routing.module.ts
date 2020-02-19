import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';

import { VersionComponent, NotFoundComponent } from '@core/containers';
import { AuthGuard } from '@auth/services';

const appRoutes: Routes = [
  {
    path: 'places',
    loadChildren: () => import('./feature/places/places.module').then(m => m.PlacesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'business',
    loadChildren: () => import('./feature/business/business.module').then(m => m.BusinessModule),
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'places', pathMatch: 'full' },
  { path: 'version/view', component: VersionComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
