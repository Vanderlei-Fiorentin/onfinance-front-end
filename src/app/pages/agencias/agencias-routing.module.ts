import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlteracaoAgenciaComponent } from './alteracao-agencia/alteracao-agencia.component';
import { CadastroAgenciaComponent } from './cadastro-agencia/cadastro-agencia.component';
import { ListagemAgenciaComponent } from './listagem-agencia/listagem-agencia.component';

const agenciasRoutes: Routes = [
  { path: '', component: ListagemAgenciaComponent },
  { path: 'cadastro', component: CadastroAgenciaComponent },
  { path: ':id', component: AlteracaoAgenciaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(agenciasRoutes)],
  exports: [RouterModule]
})
export class AgenciasRoutingModule { }
