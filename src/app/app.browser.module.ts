import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { FooterComponent } from './modules/footer/footer.component';
import { MaterialModule } from './shared/material.module';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule } from "@angular/material";
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './modules/home/home.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModulesModule } from './modules/modules.module';
import { ModulesRoutingModule } from './modules/modules-routing.module';
import { UserfullTutorialModule } from './userfull-tutorial/userfull-tutorial.module';
import { AppModule } from './app.module';


@NgModule({
  imports: [

    AppRoutingModule,
    MaterialModule,
    ModulesModule,
    ModulesRoutingModule,
    MatToolbarModule,
    // NgbModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    UserfullTutorialModule,
    NoopAnimationsModule,
    LayoutModule,
    AppModule,
    BrowserTransferStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
