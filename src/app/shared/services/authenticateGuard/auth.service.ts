import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';

/**
 * AutenticateGuard is a service used to control who can navigate a load routes.
 * Now it returns true, because the developer has to define this policy of authentication.
 */
@Injectable()
export class AuthenticateGuard implements CanActivate, CanLoad {

  /**
   * Define route activation policy
   * @returns {Boolean}
   */
  canActivate() {
    return true;
  };

  /**
   * Define lazy load policy
   * @returns {Boolean}
   */
  canLoad() {
    return new Promise((resolve, reject) => {
      return resolve(true);
    });
  };

}
