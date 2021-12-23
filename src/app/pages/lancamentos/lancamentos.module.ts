import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlteracaoLancamentoComponent } from './alteracao-lancamento/alteracao-lancamento.component';
import { CadastroLancamentoComponent } from './cadastro-lancamento/cadastro-lancamento.component';
import { ListagemLancamentoComponent } from './listagem-lancamento/listagem-lancamento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { LanctosRoutingModule } from './lanctos-routing.module';



@NgModule({
  declarations: [
    AlteracaoLancamentoComponent,
    CadastroLancamentoComponent,
    ListagemLancamentoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LanctosRoutingModule,
    NgSelectModule,
    NgxPaginationModule
  ]
})
export class LancamentosModule { }
