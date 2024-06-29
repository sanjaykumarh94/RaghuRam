import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Host, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { HomeComponent } from './modules/home/home.component';
import { ServicesComponent } from './modules/serviceslist/services.component';
import { TAboutComponent } from './userfull-tutorial/t-about/t-about.component';
import { TContactUsComponent } from './userfull-tutorial/t-contact-us/t-contact-us.component';
import { TCourseComponent } from './userfull-tutorial/t-course/t-course.component';
import { THomeComponent } from './userfull-tutorial/t-home/t-home.component';
import { UserfullTutorialRoutingModule } from './userfull-tutorial/userfull-tutorial-routing.module';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'Thome', component: THomeComponent },
  { path: 'Tabout', component: TAboutComponent },
  { path: 'Tcourses', component: TCourseComponent },
  { path: 'TContact', component: TContactUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: '**', redirectTo: 'home' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
