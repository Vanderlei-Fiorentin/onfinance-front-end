import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtratosComponent } from './extratos.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { ExtratosRoutingModule } from './extratos-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ExtratosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxPaginationModule,
    ExtratosRoutingModule
  ]
})
export class ExtratosModule { }
