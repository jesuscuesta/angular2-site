import { TestBed, inject } from '@angular/core/testing';
import { MultiLanguageService } from './multiLanguage.service';
import { TranslateService, TranslateLoader, TranslateParser } from 'ng2-translate';

describe('shared -> MultiLanguageService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MultiLanguageService,
        TranslateService,
        TranslateLoader,
        TranslateParser
      ]
    });

  // the lang to use, if the lang isn't available, it will use the current loader to get them

    spyOn(TranslateService.prototype, 'setDefaultLang').and.returnValue(true);
    spyOn(TranslateService.prototype, 'use').and.returnValue(true);

  });

  it('Should be defined',
    inject([MultiLanguageService], (multiLanguageService) => {
      expect(multiLanguageService).toBeDefined();
    })
);

  it('getLanguage should return undefined',
    inject([MultiLanguageService], (multiLanguageService) => {
      expect(multiLanguageService.getLanguage()).toBe(undefined);
    })
  );

  it('Initialize and return default language "en"',
    inject([MultiLanguageService], (multiLanguageService) => {
      // clean localstorage
      localStorage.removeItem('language');

      multiLanguageService.initialize();
      multiLanguageService.setLanguage('en');
      expect(multiLanguageService.langSelected).toBe('en');
    })
  );

  it('setLanguage to "es" and getLanguage should return "es"',
    inject([MultiLanguageService], (multiLanguageService) => {
      multiLanguageService.setLanguage('es');
      expect(multiLanguageService.langSelected).toBe('es');
    })
  );
});
