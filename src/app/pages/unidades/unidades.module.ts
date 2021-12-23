import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUnidadeComponent } from './cadastro-unidade/cadastro-unidade.component';
import { ListagemUnidadeComponent } from './listagem-unidade/listagem-unidade.component';
import { AlteracaoUnidadeComponent } from './alteracao-unidade/alteracao-unidade.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { UnidadesRoutingModule } from './unidades-routing.module';



@NgModule({
  declarations: [
    CadastroUnidadeComponent,
    ListagemUnidadeComponent,
    AlteracaoUnidadeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    NgxPaginationModule,
    UnidadesRoutingModule
  ]
})
export class UnidadesModule { }
