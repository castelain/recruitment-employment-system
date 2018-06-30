import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegulationsComponent } from './regulations/regulations.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { PlanComponent } from './plan/plan.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JobComponent } from './job/job.component';
import { EmployComponent } from './employ/employ.component';
import { DataComponent } from './data/data.component';
import { PicturesComponent } from './pictures/pictures.component';
import { BackComponent } from './back/back.component';
import { ReturnFormComponent } from './return-form/return-form.component';
import { LogInComponent } from './log-in/log-in.component';
import { LogInAdminComponent } from './log-in-admin/log-in-admin.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ApplyFormComponent } from './apply-form/apply-form.component';
import { ManageEmploymentInfoComponent } from './manage-employment-info/manage-employment-info.component';
import { ManageJobFairInfoComponent } from './manage-job-fair-info/manage-job-fair-info.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'regulations', component: RegulationsComponent },
  {path: 'dynamic', component: DynamicComponent},
  {path: 'plan', component: PlanComponent},
  {path: 'data', component: DataComponent},
  {path: 'employ', component: EmployComponent},
  {path: 'job', component: JobComponent},
  {path: 'returnForm', component: ReturnFormComponent},
  {path: 'log_in', component: LogInComponent},
  {path: 'log_in_admin', component: LogInAdminComponent},
  {path: 'sign_in', component: SignInComponent},
  {path: 'apply_form', component: ApplyFormComponent},
  {path: 'manage_employment_info', component: ManageEmploymentInfoComponent},
  {path: 'manage_job_fair_info', component: ManageJobFairInfoComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigatorComponent,
    HomeComponent,
    RegulationsComponent,
    DynamicComponent,
    PlanComponent,
    PageNotFoundComponent,
    JobComponent,
    EmployComponent,
    DataComponent,
    PicturesComponent,
    BackComponent,
    ReturnFormComponent,
    LogInComponent,
    LogInAdminComponent,
    SignInComponent,
    ApplyFormComponent,
    ManageEmploymentInfoComponent,
    ManageJobFairInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
