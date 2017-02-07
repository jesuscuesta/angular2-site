/*
 * Angular bootstraping
 */
import { AppModuleNgFactory } from '../compiled/src/app/app.module.ngfactory';
import { decorateModuleRef } from './app/app.environment';
import { platformBrowser } from '@angular/platform-browser';

platformBrowser()
  .bootstrapModuleFactory(AppModuleNgFactory)
  .then(decorateModuleRef)
  .catch(err => console.error(err));
