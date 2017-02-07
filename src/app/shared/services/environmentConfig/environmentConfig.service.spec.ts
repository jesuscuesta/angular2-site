import { TestBed, inject } from '@angular/core/testing';
import { EnvironmentConfigService } from './environmentConfig.service';

describe('shared -> AuthenticateGuard', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EnvironmentConfigService
      ]
    });
  });

  it('Should be defined',
    inject([EnvironmentConfigService], (envService) => {
      expect(envService.api).toBeDefined();
      expect(envService.api1).toBeDefined();
    })
  );

});
