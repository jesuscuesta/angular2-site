import { Component } from '@angular/core';
import { ROUTES_CONSTANTS } from '../../../shared';
/*
 * Toolbar Component which contains routes of our application.
 */
@Component({
  selector: 'toolbar',
  styleUrls: ['./toolbar.component.css'],
  templateUrl: './toolbar.component.html'
})

export class ToolbarComponent {

  routes: any;
  clickResponsive: boolean = false;

  constructor(){
    this.routes = ROUTES_CONSTANTS;
  }

}
