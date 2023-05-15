import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('./feature/authentication/authentication.component').then(
        (c) => c.AuthenticationComponent,
      ),
  },
  {
    path: 'user',
    loadComponent: () => import('./feature/user/user.component').then((c) => c.UserComponent),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
