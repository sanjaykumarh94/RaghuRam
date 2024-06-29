import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserfullTutorialRoutingModule } from './userfull-tutorial-routing.module';
import { THomeComponent } from './t-home/t-home.component';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatSliderModule } from '@angular/material';
import { MaterialModule } from '../shared/material.module';
import { TAboutComponent } from './t-about/t-about.component';
import { TCourseComponent } from './t-course/t-course.component';
import { TContactUsComponent } from './t-contact-us/t-contact-us.component';


@NgModule({
  declarations: [THomeComponent, TAboutComponent, TCourseComponent, TContactUsComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MaterialModule,
    UserfullTutorialRoutingModule
  ]
})
export class UserfullTutorialModule { }
