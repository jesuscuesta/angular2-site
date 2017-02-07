import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';


let component:  FooterComponent;
let fixture:    ComponentFixture<FooterComponent>;

describe('shared -> footerComponent', () => {
  beforeEach(() => {
    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
    });

    // create component and test fixture
    fixture = TestBed.createComponent(FooterComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });
});

