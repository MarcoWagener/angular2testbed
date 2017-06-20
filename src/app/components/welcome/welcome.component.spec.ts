import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { UserService } from '../../services/user/user.service';
import { PersonService } from '../../services/person/person.service';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  let userServiceStub: UserService;
  let userService: UserService;

  let personService: PersonService;

  let de: DebugElement; //handle on the component's DOM element
  let el: HTMLElement;

  beforeEach(async(() => {
    userServiceStub = {
      user: { name: 'Marco', isLoggedIn: true }
    };

    TestBed.configureTestingModule({
      declarations: [ WelcomeComponent ],
      // providers: [UserService]
      providers: [
        { provide: UserService, useValue: userServiceStub },
        PersonService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);

    component = fixture.componentInstance;
    el = fixture.debugElement.nativeElement;

    userService = TestBed.get(UserService);
    personService = fixture.debugElement.injector.get(PersonService);

    fixture.detectChanges();
  });

  //Do's
  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should welcome the user', () => {
    fixture.detectChanges();

    const content = el.textContent;

    expect(content).toContain('Welcome');
  });

  it('should welcome "Marco"', () => {
    fixture.detectChanges();

    const content = el.textContent;

    expect(content).toContain(userService.user.name);
  });

  //Dependant on fixture.detectChanges();
  it('should request login if not logged in', () => {
    //Mock logged out user.
    userService.user.isLoggedIn = false;

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const content = el.textContent;

      expect(content).not.toContain('Welcome', 'not welcomed');
      expect(content).toContain('Please log in', '"log in"');
    });
  });

  it('should display a person name', fakeAsync(() => {
    // fixture.detectChanges();
    // tick();
    // fixture.detectChanges();

    // expect(el.textContent).toContain(personService.person.name);
  }));
});
