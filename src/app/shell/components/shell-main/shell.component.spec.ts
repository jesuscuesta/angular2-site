import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA }    from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { ToolbarComponent } from '../toolbar/toolbar.component';

// Load the implementations that should be tested
import { ShellComponent } from './shell.component';

let component:  ShellComponent;
let fixture:    ComponentFixture<ShellComponent>;
let debug:      DebugElement;
let element:    HTMLElement;
const routes = [{ path: '', component: ShellComponent}];

describe('App Shell', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(routes)
      ],
      declarations: [
        ShellComponent,
        ToolbarComponent
      ], // declare the test component
      providers: [{provide: APP_BASE_HREF, useValue : '/' }],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents(); // compile template and css

    fixture = TestBed.createComponent(ShellComponent);

    component = fixture.componentInstance; // ShellComponent test instance

    // query for the first <a> by CSS element selector
    debug = fixture.debugElement.query(By.css('a'));

    element = debug.nativeElement;
  });

  it('should have first route called Home', () => {
    fixture.detectChanges();
    expect(element.textContent).toContain('Home');
  });

});
