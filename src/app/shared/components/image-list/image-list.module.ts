import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageListComponent } from './image-list.component';
import { SearchPipeModule } from '../../pipes/search/search.pipe.module';

/**
 * Image List Module, must be imported inside a module when you use lazy load modules
 */
@NgModule({
  declarations: [
    ImageListComponent
  ],
  imports: [
    CommonModule,
    SearchPipeModule
  ],
  exports: [
    ImageListComponent
  ]
})

export class ImageListModule { }
