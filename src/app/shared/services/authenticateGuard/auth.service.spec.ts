import { TestBed, inject } from '@angular/core/testing';
import { AuthenticateGuard } from './auth.service';

describe('shared -> AuthenticateGuard', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthenticateGuard
      ]
    });

    // spyOn(AuthenticateGuard.prototype, 'canLoad').and.returnValue(true);
  });

  it('Should be defined',
    inject([AuthenticateGuard], (authService) => {
      expect(authService).toBeDefined();
    })
  );

  it('canActivate should return true',
    inject([AuthenticateGuard], (authService) => {
      expect(authService.canActivate()).toBe(true);
    })
  );

  it('canLoad should return promise object',
    inject([AuthenticateGuard], (authService) => {
      expect(typeof authService.canLoad()).toBe('object');
    })
  );
});
