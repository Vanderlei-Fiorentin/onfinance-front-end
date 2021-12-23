import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemBandeiraComponent } from './listagem-bandeira/listagem-bandeira.component';
import { CadastroBandeiraComponent } from './cadastro-bandeira/cadastro-bandeira.component';
import { AlteracaoBandeiraComponent } from './alteracao-bandeira/alteracao-bandeira.component';
import { BandeirasRoutingModule } from './bandeiras-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AlteracaoBandeiraComponent,
    CadastroBandeiraComponent,
    ListagemBandeiraComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BandeirasRoutingModule,
    NgSelectModule,
    NgxPaginationModule
  ]
})
export class BandeirasModule { }
