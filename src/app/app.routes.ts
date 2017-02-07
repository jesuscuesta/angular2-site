import { Routes } from '@angular/router';
import { AuthenticateGuard, NoContentComponent, ROUTES_CONSTANTS } from './shared';

/**
 * Main routes for root app. Here you have to define basic routes, first level of our lazy load modules.
 */
export const routes: Routes = [
  {
    path: '',
    canActivate: [AuthenticateGuard],
    canLoad: [AuthenticateGuard],
    loadChildren: './modules/+home/home.module#HomeModule'
  },
  {
    path: ROUTES_CONSTANTS.HOME.path,
    canActivate: [AuthenticateGuard],
    canLoad: [AuthenticateGuard],
    loadChildren: './modules/+home/home.module#HomeModule'
  },
  {
    path: ROUTES_CONSTANTS.NO_CONTENT.path,
    component: NoContentComponent
  }
];
