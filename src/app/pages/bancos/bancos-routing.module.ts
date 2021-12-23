import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlteracaoBancoComponent } from './alteracao-banco/alteracao-banco.component';
import { CadastroBancoComponent } from './cadastro-banco/cadastro-banco.component';
import { ListagemBancoComponent } from './listagem-banco/listagem-banco.component';

const bancosRoutes: Routes = [
  { path: '', component: ListagemBancoComponent },
  { path: 'cadastro', component: CadastroBancoComponent },
  { path: ':id', component: AlteracaoBancoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(bancosRoutes)],
  exports: [RouterModule]
})
export class BancosRoutingModule { }