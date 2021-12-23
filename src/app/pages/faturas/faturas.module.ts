import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemFaturasComponent } from './listagem-faturas/listagem-faturas.component';
import { FaturasRoutingModule } from './faturas-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListagemFaturasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    NgxPaginationModule,
    FaturasRoutingModule
  ]
})
export class FaturasModule { }
