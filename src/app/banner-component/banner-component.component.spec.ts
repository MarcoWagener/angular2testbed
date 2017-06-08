import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

import { BannerComponentComponent } from './banner-component.component';

describe('BannerComponentComponent', () => {
  let component: BannerComponentComponent;
  let fixture: ComponentFixture<BannerComponentComponent>; //handle on the test environment surrounding the created component

  let de: DebugElement; //handle on the component's DOM element
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponentComponent ],
      providers: [{
        provide: ComponentFixtureAutoDetect, useValue: true
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponentComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  //Haves
  it('should have a p tag', () => {
    // fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p')).toBeTruthy();
  });

  it('should display The banner component works!', () => {
    // fixture.detectChanges();
    de = fixture.debugElement.query(By.css('p'));
    el = de.nativeElement;
    expect(el.textContent).toContain('The banner component works!');
  });

  //Do's
});
