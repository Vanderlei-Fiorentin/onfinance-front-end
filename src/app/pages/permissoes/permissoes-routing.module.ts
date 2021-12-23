import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciarRolesComponent } from './gerenciar-roles/gerenciar-roles.component';

const permissoesRoutes: Routes = [
  { path: '', component: GerenciarRolesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(permissoesRoutes)],
  exports: [RouterModule]
})
export class PermissoesRoutingModule { }