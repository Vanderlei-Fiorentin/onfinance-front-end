import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlteracaoBandeiraComponent } from './alteracao-bandeira/alteracao-bandeira.component';
import { CadastroBandeiraComponent } from './cadastro-bandeira/cadastro-bandeira.component';
import { ListagemBandeiraComponent } from './listagem-bandeira/listagem-bandeira.component';

const bandeirasRoutes: Routes = [
  { path: '', component: ListagemBandeiraComponent },
  { path: 'cadastro', component: CadastroBandeiraComponent },
  { path: ':id', component: AlteracaoBandeiraComponent }
];

@NgModule({
  imports: [RouterModule.forChild(bandeirasRoutes)],
  exports: [RouterModule]
})
export class BandeirasRoutingModule { }