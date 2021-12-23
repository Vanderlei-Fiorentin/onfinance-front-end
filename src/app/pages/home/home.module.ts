import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleChartsModule } from 'angular-google-charts';


@NgModule({
  declarations: [
      HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule, 
    FormsModule,
    GoogleChartsModule
  ]
})
export class HomeModule { }
