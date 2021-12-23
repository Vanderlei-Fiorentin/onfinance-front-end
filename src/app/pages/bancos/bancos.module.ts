import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BancosRoutingModule } from './bancos-routing.module';
import { ListagemBancoComponent } from './listagem-banco/listagem-banco.component';
import { CadastroBancoComponent } from './cadastro-banco/cadastro-banco.component';
import { AlteracaoBancoComponent } from './alteracao-banco/alteracao-banco.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListagemBancoComponent,
    CadastroBancoComponent,
    AlteracaoBancoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BancosRoutingModule,
    NgSelectModule,
    NgxPaginationModule
  ]
})
export class BancosModule { }
