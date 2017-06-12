import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

import { UserService } from './services/user.service';
import { PersonService } from './services/person.service';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    UserService,
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
