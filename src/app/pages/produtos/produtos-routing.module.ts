import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlteracaoProdutoComponent } from './alteracao-produto/alteracao-produto.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ListagemProdutoComponent } from './listagem-produto/listagem-produto.component';

const produtosRoutes: Routes = [
  { path: '', component: ListagemProdutoComponent },
  { path: 'cadastro', component: CadastroProdutoComponent },
  { path: ':id', component: AlteracaoProdutoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(produtosRoutes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }