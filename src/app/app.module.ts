import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { PortfoliopageComponent } from './portfoliopage/portfoliopage.component';
import { SkillspageComponent } from './skillspage/skillspage.component';
import { HobbiespageComponent } from './hobbiespage/hobbiespage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutmeComponent,
    PortfoliopageComponent,
    SkillspageComponent,
    HobbiespageComponent,
    ContactpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
