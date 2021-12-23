import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlteracaoEventoComponent } from './alteracao-evento/alteracao-evento.component';
import { CadastroEventoComponent } from './cadastro-evento/cadastro-evento.component';
import { ListagemEventoComponent } from './listagem-evento/listagem-evento.component';

const eventosRoutes: Routes = [
  { path: '', component: ListagemEventoComponent },
  { path: 'cadastro', component: CadastroEventoComponent },
  { path: ':id', component: AlteracaoEventoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(eventosRoutes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }