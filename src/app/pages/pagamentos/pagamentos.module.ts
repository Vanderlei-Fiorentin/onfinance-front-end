import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagamentosComponent } from './pagamentos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { PagamentosRoutingModule } from './pagamentos-routing.module';



@NgModule({
  declarations: [
    PagamentosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagamentosRoutingModule,
    NgSelectModule
  ]
})
export class PagamentosModule { }
