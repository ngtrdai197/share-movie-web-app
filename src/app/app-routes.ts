import { Route } from '@angular/router';
import { DefaultLayoutComponent } from './shared/default-layout/default-layout.component';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(({ AuthModule }) => AuthModule),
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then(({ HomeModule }) => HomeModule),
      },
    ],
  },
];
