import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlteracaoCartaoComponent } from './alteracao-cartao/alteracao-cartao.component';
import { CadastroCartaoComponent } from './cadastro-cartao/cadastro-cartao.component';
import { ListagemCartaoComponent } from './listagem-cartao/listagem-cartao.component';

const cartoesRoutes: Routes = [
  { path: '', component: ListagemCartaoComponent },
  { path: 'cadastro', component: CadastroCartaoComponent },
  { path: ':id', component: AlteracaoCartaoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(cartoesRoutes)],
  exports: [RouterModule]
})
export class CartoesRoutingModule { }