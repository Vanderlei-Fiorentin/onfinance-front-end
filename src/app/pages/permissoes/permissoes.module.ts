import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenciarRolesComponent } from './gerenciar-roles/gerenciar-roles.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { PermissoesRoutingModule } from './permissoes-routing.module';



@NgModule({
  declarations: [
    GerenciarRolesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    PermissoesRoutingModule
  ]
})
export class PermissoesModule { }
