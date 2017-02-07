import { NgModule } from '@angular/core';
import { SafePipe } from './safe.pipe';

/**
 * Search Pipe Module, Pipes must be imported inside a module when you use lazy load modules
 */
@NgModule({
  declarations: [
    SafePipe
  ],
  exports: [
    SafePipe
  ]
})

export class SafePipeModule { }
