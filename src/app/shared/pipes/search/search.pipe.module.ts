import { NgModule } from '@angular/core';
import { SearchPipe } from './search.pipe';

/**
 * Search Pipe Module, Pipes must be imported inside a module when you use lazy load modules
 */
@NgModule({
  declarations: [
    SearchPipe
  ],
  exports: [
    SearchPipe
  ]
})

export class SearchPipeModule { }
