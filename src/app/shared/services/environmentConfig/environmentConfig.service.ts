import { Injectable } from '@angular/core';

/**
 * Environment Service takes constants defined in /config/app.config.json and
 * creates a service with values and make them accesible throught a angular 2 service
 */
@Injectable()
export class EnvironmentConfigService {

  api: string;
  api1: string;

  constructor() {
    /*
    *  ENVIRONMENT_CONFIG.api is a value defined in /config/app.config.json
    *  ENVIRONMENT_CONFIG.api1 is a value defined in /config/app.config.json
    */

    this.api = ENVIRONMENT_CONFIG.api;
    this.api1 = ENVIRONMENT_CONFIG.api1;
  }
}
