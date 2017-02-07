import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Load the implementations that should be tested
import { ImageListComponent } from './image-list.component';
import { Tech } from '../../services/techs';
import { SearchPipeModule } from '../../pipes/search/search.pipe.module';

describe('Module Shared -> Component ImageList', () => {
  let component: ImageListComponent;
  let fixture;

  const elements: Array<any> = [
    {
      title: 'example1',
      description: 'description example1',
      image: '',
      icon: ''
    },
    {
      title: 'example2',
      description: 'description example2',
      image: '',
      icon: ''
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SearchPipeModule
      ],
      declarations: [ ImageListComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents(); // compile template and css

    fixture = TestBed.createComponent(ImageListComponent);
    component = fixture.componentInstance;
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

  it('should render elements correctly, same number of elements', () => {

    component.elements = elements;
    fixture.detectChanges();

    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelectorAll('.list-item-text').length).toEqual(elements.length);
  });

  it('should handle search', () => {
    component.handleChangeSearch('query');
    expect(component.search).toEqual('query');
  });

});
