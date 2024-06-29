import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatSliderModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../shared/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './serviceslist/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
// import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    // NavbarComponent,
    // FooterComponent,
    HomeComponent,
    ContactUsComponent,
    ServicesComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    // NgbCarousel,
    CarouselModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MaterialModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
