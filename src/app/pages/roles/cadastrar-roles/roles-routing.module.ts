import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlteracaoRoleComponent } from '../alteracao-role/alteracao-role.component';
import { ListagemRoleComponent } from '../listagem-role/listagem-role.component';
import { CadastrarRolesComponent } from './cadastrar-roles.component';

const rolesRoutes: Routes = [
  { path: '', component: ListagemRoleComponent },
  { path: 'cadastro', component: CadastrarRolesComponent },
  { path: ':id', component: AlteracaoRoleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(rolesRoutes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }