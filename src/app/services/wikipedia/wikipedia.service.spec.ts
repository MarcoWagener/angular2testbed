import { TestBed, inject } from '@angular/core/testing';

import { WikipediaService } from './wikipedia.service';

describe('WikipediaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WikipediaService]
    });
  });

  //Haves
  it('should be created', inject([WikipediaService], (service: WikipediaService) => {
    expect(service).toBeTruthy();
  }));

  it('should have a search function', () => {

  });

  //Dos
  it('search function should accept a string of "Marco"', () => {

  });

  it('search function should return a list of "Marco" results', () => {

  });
});
