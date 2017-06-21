import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WikipediaComponent } from './components/wikipedia/wikipedia.component';

import { UserService } from './services/user/user.service';
import { PersonService } from './services/person/person.service';
import { WikipediaService } from './services/wikipedia/wikipedia.service';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    WelcomeComponent,
    WikipediaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    UserService,
    PersonService,
    WikipediaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
