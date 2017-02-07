import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../../../app.routes';

import { ToolbarComponent } from './toolbar.component';
import { NoContentComponent } from '../../../shared/components/no-content/noContent.component';

let component:  ToolbarComponent;
let fixture:    ComponentFixture<ToolbarComponent>;

describe('shared -> ToolbarComponent', () => {
  beforeEach(() => {
    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      declarations: [
        ToolbarComponent,
        NoContentComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(ToolbarComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

  it('should have routes defined', () => {
    expect(typeof component.routes).toBe('object');
  });
});
