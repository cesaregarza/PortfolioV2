/// <reference types="@types/jquery.nicescroll" />
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
import { InfiniteScrollModule } from 'ngx-infinite-scroll-extended/dist';
import * as $ from 'jquery/dist/jQuery';
import 'jquery.nicescroll';
import 'lethargy';

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
    AppRoutingModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
