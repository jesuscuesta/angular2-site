import { TestBed, inject } from '@angular/core/testing';
import { FeaturesService } from './features.service';

describe('Modules -> Home -> Services -> FeaturesService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ FeaturesService ]
    });
  });

  it('Should return 9 features', inject([FeaturesService], (service: FeaturesService) => {
    expect(service.getFeatures().length).toBe(9);
  }));

});
