import { Component, ViewEncapsulation } from '@angular/core';

/*
 * Always known as AppComponent. Shell component is a top level component.
 * Bootstraping component. Load only our "shell" components like toolbar, footer, etc..
 * Also contains a container for our lazy load modules, which will be loaded by the router after
 * tag router-outlet.
 */

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  encapsulation: ViewEncapsulation.None
})

export class ShellComponent { }
