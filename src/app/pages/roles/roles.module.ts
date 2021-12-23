import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarRolesComponent } from './cadastrar-roles/cadastrar-roles.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgSelectModule } from '@ng-select/ng-select';
import { RolesRoutingModule } from './cadastrar-roles/roles-routing.module';
import { AlteracaoRoleComponent } from './alteracao-role/alteracao-role.component';
import { ListagemRoleComponent } from './listagem-role/listagem-role.component';



@NgModule({
  declarations: [
    CadastrarRolesComponent,
    AlteracaoRoleComponent,
    ListagemRoleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    NgxPaginationModule,
    RolesRoutingModule
  ]
})
export class RolesModule { }
