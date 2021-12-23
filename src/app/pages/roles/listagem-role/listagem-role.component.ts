import { Component, OnInit } from '@angular/core';
import { RoleModel } from 'src/app/core/models/role.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { ExceptionService } from 'src/app/core/services/exception.service';
import { RoleService } from 'src/app/core/services/role.service';

@Component({
  selector: 'app-listagem-role',
  templateUrl: './listagem-role.component.html',
  styleUrls: ['./listagem-role.component.css']
})
export class ListagemRoleComponent implements OnInit {

  roles: RoleModel[] = [];
  rolesListadas: RoleModel[] = [];
  paginaAtual: number = 1;
  pesquisa: string = '';
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private roleService: RoleService,
    private alertService: AlertService,
    private exception: ExceptionService
  ) { }

  ngOnInit(): void {
    this.findRoles();
  }

  findRoles() {
    this.roleService.findAll().subscribe({
      next: (roles) => {
        this.paginaAtual = 1;
        this.roles = roles;
        this.rolesListadas = roles;
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao listar as roles!');
      }
    });
  }

  remove(id: number) {
    this.roleService.remove(id).subscribe({
      next: () => {
        this.alertService.success('Role removida com sucesso!', this.options);
        this.findRoles();
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao remover a role!');
      }
    })
  }

  filtrar(pesquisa: string) {
    this.roles = this.rolesListadas.filter(r => r.nome.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase()));
  }

}
