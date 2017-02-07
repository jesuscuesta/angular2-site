import {  TestBed, inject } from '@angular/core/testing';
import { TechsService } from './techs.service';

describe('Modules -> Home -> Services -> TechsService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TechsService]
    });
  });

  it('Should return 9 techs', inject([TechsService], (service: TechsService) => {
    expect(service.getTechs().length).toBe(9);
  }));
});
