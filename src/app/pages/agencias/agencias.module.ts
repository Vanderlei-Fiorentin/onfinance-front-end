import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroAgenciaComponent } from './cadastro-agencia/cadastro-agencia.component';
import { AlteracaoAgenciaComponent } from './alteracao-agencia/alteracao-agencia.component';
import { AgenciasRoutingModule } from './agencias-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ListagemAgenciaComponent } from './listagem-agencia/listagem-agencia.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CadastroAgenciaComponent,
    AlteracaoAgenciaComponent,
    ListagemAgenciaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AgenciasRoutingModule,
    NgSelectModule,
    NgxPaginationModule
  ]
})
export class AgenciasModule { }
