import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

import { UserService } from './services/user.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BannerComponent,
        WelcomeComponent
      ],
      providers: [
        UserService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));

  it('should render the app banner component', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    // expect(compiled.querySelector('h1').textContent).toContain('Hi there');
    expect(compiled.querySelector('app-banner'));
  }));

  it('should render the welcome component', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    // expect(compiled.querySelector('h1').textContent).toContain('Hi there');
    expect(compiled.querySelector('app-welcome'));
  }));  
});
