import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { PortfoliopageComponent } from './portfoliopage/portfoliopage.component';
import { HobbiespageComponent } from './hobbiespage/hobbiespage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { SkillspageComponent } from './skillspage/skillspage.component';

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
  },
  {
    path: "about",
    component: AboutmeComponent
  },
  {
    path: "portfolio",
    component: PortfoliopageComponent
  },
  {
    path: "hobbies",
    component: HobbiespageComponent
  },
  {
    path: "contact",
    component: ContactpageComponent
  },
  {
    path: "skills",
    component: SkillspageComponent
  },
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full"
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
