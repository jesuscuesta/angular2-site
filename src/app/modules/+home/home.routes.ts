import { HomeMainComponent } from './components/home-main/home-main.component';

/**
 * Child routes for Home Module Lazy Load. Keep in mind that this routes are CHILD routes,
 * this means that routes defined here begins with /home which is defined in app.routes.ts
 * path: '' -> correspond with yourdomain.com/#/home (default route)
 * path: 'whatever' -> correspond with yourdomain.com/#/home/whatever
 */
export const routes = [
  { path: '', component: HomeMainComponent }
];
