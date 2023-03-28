import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { SmartscaleComponent } from './final/smartscale/smartscale.component';
export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'main', component: SmartscaleComponent
      }
    ]
  }
];
