import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { EnvironmentConfigService } from '../../../../shared/services/environmentConfig/environmentConfig.service';

import { TranslateModule } from 'ng2-translate';

// Load the implementations that should be tested
import { HomeMainComponent } from './home-main.component';

describe('Module Home -> Component HomeMain', () => {
  let component: HomeMainComponent;
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [ EnvironmentConfigService ],
      declarations: [ HomeMainComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents(); // compile template and css
    const fixture = TestBed.createComponent(HomeMainComponent);
    component = fixture.componentInstance;
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

  it('should have a rowHeight', () => {
    expect(!!component.rowHeight).toEqual(true);
  });

  it('should ngOnInit called', () => {
    component.ngOnInit();
    expect(component.techs).toBeDefined();
  });
});
