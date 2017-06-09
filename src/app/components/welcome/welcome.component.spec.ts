import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { UserService } from '../../services/user.service';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let userServiceStub: UserService;
  let userService: UserService;
  let de: DebugElement; //handle on the component's DOM element
  let el: HTMLElement;

  beforeEach(async(() => {
    userServiceStub = {
      user: { name: 'Marco', isLoggedIn: true }
    };

    TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ],
      // providers: [UserService]
      providers: [ {provide: UserService, useValue: userServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    userService = TestBed.get(UserService);

    fixture.detectChanges();
  });

  //Do's
  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should welcome the user', () => {
    fixture.detectChanges();
    el = fixture.debugElement.nativeElement;
    expect(el.textContent).toContain('Welcome');
  });
});
