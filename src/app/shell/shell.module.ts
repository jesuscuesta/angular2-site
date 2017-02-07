import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { TranslateService } from 'ng2-translate';

import { ShellComponent } from './components/shell-main/shell.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { routes } from './shell.routes';

/**
 * Shell Module is common known as Application shell, this module isn't a lazy load module.
 * This module contains the main a minimum pieces of code of our application such a Toolbar,
 * Footer, etc... This allow us to load only the main content and avoid things that we don't need
 * at first load.
 */
@NgModule({
  declarations: [
    ShellComponent,
    ToolbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [ TranslateService ]
})

export class ShellModule {}
