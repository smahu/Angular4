import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {AppComponent} from "./app.component";
import { StepperComponent } from './stepper/stepper.component';
import {TableComponent} from "./table/table.component";
import {LoginGuard} from "./login.guard";
import {HomeGuard} from "./home.guard";
import {LoginComponent} from "./login-component/login-component.component";

const appRoutes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'main',component: AppComponent},
  { path: 'user', component: LoginComponent},
  { path:'home', component: HomePageComponent,canActivate:[LoginGuard]},
  { path:'table', component: TableComponent},
  { path:'userinfo', component: StepperComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
