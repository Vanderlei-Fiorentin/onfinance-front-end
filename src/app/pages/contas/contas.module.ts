import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlteracaoContaComponent } from './alteracao-conta/alteracao-conta.component';
import { CadastroContaComponent } from './cadastro-conta/cadastro-conta.component';
import { ListagemContaComponent } from './listagem-conta/listagem-conta.component';
import { ContasRoutingModule } from './contas-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AlteracaoContaComponent,
    CadastroContaComponent,
    ListagemContaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ContasRoutingModule,
    NgSelectModule,
    NgOptionHighlightModule,
    NgxPaginationModule
  ]
})
export class ContasModule { }
