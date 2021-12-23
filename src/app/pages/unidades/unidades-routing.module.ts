import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlteracaoUnidadeComponent } from './alteracao-unidade/alteracao-unidade.component';
import { CadastroUnidadeComponent } from './cadastro-unidade/cadastro-unidade.component';
import { ListagemUnidadeComponent } from './listagem-unidade/listagem-unidade.component';

const unidadesRoutes: Routes = [
  { path: '', component: ListagemUnidadeComponent },
  { path: 'cadastro', component: CadastroUnidadeComponent },
  { path: ':id', component: AlteracaoUnidadeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(unidadesRoutes)],
  exports: [RouterModule]
})
export class UnidadesRoutingModule { }