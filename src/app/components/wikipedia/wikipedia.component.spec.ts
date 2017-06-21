import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { WikipediaService } from '../../services/wikipedia/wikipedia.service';

import { WikipediaComponent } from './wikipedia.component';

describe('WikipediaComponent', () => {
  let component: WikipediaComponent;
  let fixture: ComponentFixture<WikipediaComponent>;

  let wikipediaService: WikipediaService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikipediaComponent ],
      providers: [ WikipediaService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikipediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Have's
  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a wikipedia service instance', () => {
    expect(fixture.debugElement.injector.get(WikipediaService)).toBeTruthy();
  });

  it('should display a text box for searching against wikipedia', () => {

  });

  //Do's
  it('should display a list of "Marco" results', () => {

  });
});
