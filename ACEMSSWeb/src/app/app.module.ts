import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareerComponent } from './career/career.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Auth/login/login.component';
import { ApplicantViewComponent } from './AuthView/applicant-view/applicant-view.component';
import { ContactViewComponent } from './AuthView/contact-view/contact-view.component';
import { CommericalCleaningComponent } from './services/commerical-cleaning/commerical-cleaning.component';
import { MechanicalMaintenanceComponent } from './services/mechanical-maintenance/mechanical-maintenance.component';
import { ManagementSupportComponent } from './services/management-support/management-support.component';
import { PestControlComponent } from './services/pest-control/pest-control.component';
import { LandscapingComponent } from './services/landscaping/landscaping.component';
import { SecurityServicesComponent } from './services/security-services/security-services.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    CareerComponent,
    LoginComponent,
    ApplicantViewComponent,
    ContactViewComponent,
    CommericalCleaningComponent,
    MechanicalMaintenanceComponent,
    ManagementSupportComponent,
    PestControlComponent,
    LandscapingComponent,
    SecurityServicesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
