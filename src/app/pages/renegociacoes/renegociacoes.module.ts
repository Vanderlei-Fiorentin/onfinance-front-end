import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RenegociacaoRoutingModule } from './renegociacao-routing.module';
import { RenegociacaoComponent } from './renegociacao/renegociacao.component';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    RenegociacaoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    RenegociacaoRoutingModule
  ]
})
export class RenegociacoesModule { }
