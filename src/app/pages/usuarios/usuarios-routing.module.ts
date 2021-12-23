import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlteracaoUsuarioComponent } from './alteracao-usuario/alteracao-usuario.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ListagemUsuarioComponent } from './listagem-usuario/listagem-usuario.component';

const vincularRoutes: Routes = [
  { path: '', component: ListagemUsuarioComponent },
  { path: 'cadastro', component: CadastroUsuarioComponent },
  { path: ':id', component: AlteracaoUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(vincularRoutes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
