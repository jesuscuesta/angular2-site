import { Injectable } from '@angular/core';
import { TECHS } from './mock-techs';
import { Tech } from './techs.interface';

@Injectable()
export class TechsService {

  getTechs(): Array<Tech> {
    return TECHS;
  }
}
