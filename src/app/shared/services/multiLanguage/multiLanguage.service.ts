import { Injectable } from '@angular/core';
import { TranslateService } from 'ng2-translate';

/**
 * Service of translation using ng2-translate.
 */
@Injectable()
export class MultiLanguageService {
  langSelected: string;
  langDefault: string = 'en';
  translateService: TranslateService;

  /**
   * Constructor: set default language
   */
  constructor(translateService: TranslateService) {
    this.translateService = translateService;
    this.translateService.setDefaultLang(this.langDefault);
  }

  /**
   * Initialize a language, first checks if has been setted in localStorage yet,
   * else set land by default.
   */
  initialize(){
    if (this.langSelected) {
      return this.langSelected;
    }

    if (localStorage && localStorage['language']) {
      let lang = localStorage['language'];
      this.setLanguage(lang);
    }
    else {
      this.setLanguage(this.langDefault);
    }

  }

  /**
   * Get language selected
   */
  getLanguage() {
    return this.langSelected;
  }

  /**
   * Set a language passed by param
   * @param language: string
   */
  setLanguage(language: string){
    if (localStorage) {
      localStorage['language'] = language;
    }
    this.langSelected = language;
    this.translateService.use(this.langSelected);
  }
}
