import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './Auth/login/login.component';
import { ApplicantViewComponent } from './AuthView/applicant-view/applicant-view.component';
import { ContactViewComponent } from './AuthView/contact-view/contact-view.component';
import { CareerComponent } from './career/career.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { CommericalCleaningComponent } from './services/commerical-cleaning/commerical-cleaning.component';
import { LandscapingComponent } from './services/landscaping/landscaping.component';
import { ManagementSupportComponent } from './services/management-support/management-support.component';
import { MechanicalMaintenanceComponent } from './services/mechanical-maintenance/mechanical-maintenance.component';
import { PestControlComponent } from './services/pest-control/pest-control.component';
import { SecurityServicesComponent } from './services/security-services/security-services.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'careers', component: CareerComponent},
  { path: 'login', component: LoginComponent},
  { path: 'services', children: [
    { path: 'commerical-cleaning', component: CommericalCleaningComponent},
    { path: 'mechanical-maintenance', component: MechanicalMaintenanceComponent},
    { path: 'management-support', component: ManagementSupportComponent},
    { path: 'pest-control', component: PestControlComponent},
    { path: 'landscaping', component: LandscapingComponent},
    { path: 'security-services', component: SecurityServicesComponent},
  ]},
  { path: 'view/contact', component: ContactViewComponent},
  { path: 'view/applicant', component: ApplicantViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
