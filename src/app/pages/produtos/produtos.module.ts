import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlteracaoProdutoComponent } from './alteracao-produto/alteracao-produto.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ListagemProdutoComponent } from './listagem-produto/listagem-produto.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { ProdutosRoutingModule } from './produtos-routing.module';



@NgModule({
  declarations: [
    AlteracaoProdutoComponent,
    CadastroProdutoComponent,
    ListagemProdutoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    NgxPaginationModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
