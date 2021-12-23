import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlteracaoCartaoComponent } from './alteracao-cartao/alteracao-cartao.component';
import { CadastroCartaoComponent } from './cadastro-cartao/cadastro-cartao.component';
import { ListagemCartaoComponent } from './listagem-cartao/listagem-cartao.component';
import { CartoesRoutingModule } from './cartoes-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AlteracaoCartaoComponent,
    CadastroCartaoComponent,
    ListagemCartaoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CartoesRoutingModule,
    NgSelectModule,
    NgxPaginationModule
  ]
})
export class CartoesModule { }
