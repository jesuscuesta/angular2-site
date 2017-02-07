import { Component } from '@angular/core';

import { MultiLanguageService, EnvironmentConfigService } from '../../../../shared';

import { Feature, FeaturesService } from '../../services/features';
import { Tech, TechsService } from '../../services/techs';

/**
 * Main component for home route. Load features and technologies used in this starter kit.
 */
@Component({
  selector: 'home-main',
  providers: [
    MultiLanguageService,
    EnvironmentConfigService,
    FeaturesService,
    TechsService
  ],
  styleUrls: [ './home-main.component.css' ],
  templateUrl: './home-main.component.html'
})

export class HomeMainComponent {

  features: Array<Feature> = [];
  techs: Array<Tech> = [];
  rowHeight: string = '200px';
  tabActive: string = 'features';
  /*@ViewChild('search')
  search: ElementRef;
  element: HTMLElement;
  */

  /**
   * Loads services needed by HomeMainComponent. Dependency injection.
   */
  constructor(
    private translate: MultiLanguageService,
    private environmentConfig: EnvironmentConfigService,
    private featuresService: FeaturesService,
    private techsService: TechsService
  ) {}

  ngOnInit() {
    this.features = this.featuresService.getFeatures();
    this.techs = this.techsService.getTechs();
    console.log(this.environmentConfig.api);

    // initialize translate service
    this.translate.initialize();
    /* if you want change language, you need to call method of translateService
      example:
      this.translate.setLanguage('es');
    */
  }

}
