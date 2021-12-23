import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlteracaoLancamentoComponent } from './alteracao-lancamento/alteracao-lancamento.component';
import { CadastroLancamentoComponent } from './cadastro-lancamento/cadastro-lancamento.component';
import { ListagemLancamentoComponent } from './listagem-lancamento/listagem-lancamento.component';

const lanctosRoutes: Routes = [
  { path: '', component: ListagemLancamentoComponent },
  { path: 'cadastro', component: CadastroLancamentoComponent },
  { path: ':id', component: AlteracaoLancamentoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(lanctosRoutes)],
  exports: [RouterModule]
})
export class LanctosRoutingModule { }