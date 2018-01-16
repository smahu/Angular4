import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule,NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import {AppRoutingModule} from "./app.routes";
import { HomePageComponent } from './home-page/home-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule, MatSnackBarModule, MatSortModule, MatTooltipModule} from "@angular/material";
import { InfoPageComponent } from './info-page/info-page.component';
import { UserFormComponent } from './user-form/user-form.component';
import { DataServvice } from './datapass.service';
import { AppTabsComponent } from './app-tabs/app-tabs.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
import { StepperComponent } from './stepper/stepper.component';
import {MatStepperModule} from '@angular/material/stepper';
import { Page2Component } from './page2/page2.component';
import {MatSliderModule} from '@angular/material/slider';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material/table';
import {LoginService} from "./login.service";
import {LoginGuard} from "./login.guard";
import {HomeGuard} from "./home.guard";
import {LoginComponent} from "./login-component/login-component.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    NavBarComponent,
    InfoPageComponent,
    UserFormComponent,
    AppTabsComponent,
    StepperComponent,
    Page2Component,
    TableComponent
  ],
  imports: [
    BrowserModule,MatInputModule,BrowserAnimationsModule,NoopAnimationsModule,MatButtonModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,MatSelectModule, MatSnackBarModule,MatTooltipModule,MatRadioModule,
    MatTabsModule,MatStepperModule,MatSliderModule,MatTableModule,MatPaginatorModule,MatSortModule
  ],
  providers: [DataServvice,LoginService,LoginGuard,HomeGuard],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],

})
export class AppModule { }
