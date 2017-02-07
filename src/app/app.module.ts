import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { HttpModule } from '@angular/http';

import { TranslateModule } from 'ng2-translate';

/** Platform and Environment providers/directives/pipes */
import { ENV_PROVIDERS } from './app.environment';
import { routes } from './app.routes';
import { AuthenticateGuard } from './shared/services/authenticateGuard/auth.service';

/** App is our top level component */
import { ShellComponent, ShellModule } from './shell';
import { NoContentComponent } from './shared/components/no-content/noContent.component';

/**
 * AppModule is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ ShellComponent ],
  declarations: [
    NoContentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ShellModule,
    RouterModule.forRoot(routes, {
      useHash: true
      // ,preloadingStrategy: PreloadAllModules
    }),
    TranslateModule.forRoot()
  ],
  /* expose our Services and Providers into Angular's dependency injection */
  providers: [
    ENV_PROVIDERS,
    AuthenticateGuard
  ]
})

export class AppModule {
  constructor(public appRef: ApplicationRef, private router: Router) {

    if ('production' !== ENV) {
      router.events.subscribe((navigationEvent) => {
        if (navigationEvent instanceof NavigationEnd) {
          // console.debug('navigation to: ', navigationEvent);
        }
      });
    }
  }
}
