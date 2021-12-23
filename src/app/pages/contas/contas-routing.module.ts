import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlteracaoContaComponent } from './alteracao-conta/alteracao-conta.component';
import { CadastroContaComponent } from './cadastro-conta/cadastro-conta.component';
import { ListagemContaComponent } from './listagem-conta/listagem-conta.component';

const contasRoutes: Routes = [
  { path: '', component: ListagemContaComponent },
  { path: 'cadastro', component: CadastroContaComponent },
  { path: ':id', component: AlteracaoContaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(contasRoutes)],
  exports: [RouterModule]
})
export class ContasRoutingModule { }