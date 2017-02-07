import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from 'ng2-translate';

import { HomeMainComponent } from './components/home-main/home-main.component';
import { HomeLogoComponent } from './components/home-logo/home-logo.component';
import { ImageListModule } from '../../shared';

import { routes } from './home.routes';

@NgModule({
  declarations: [
    HomeMainComponent,
    HomeLogoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule.forRoot(),
    ImageListModule
  ]
})

export class HomeModule { }
