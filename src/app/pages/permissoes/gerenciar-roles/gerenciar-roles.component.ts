import { Component, OnInit } from '@angular/core';
import { PermissaoRoleCollection } from 'src/app/core/collections/permissao-role.collection';
import { PermissaoRoleID } from 'src/app/core/models/permissao-role-id.model';
import { PermissaoRoleModel } from 'src/app/core/models/permissao-role.model';
import { PermissaoModel } from 'src/app/core/models/permissao.model';
import { RoleModel } from 'src/app/core/models/role.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { ExceptionService } from 'src/app/core/services/exception.service';
import { PermissaoRoleService } from 'src/app/core/services/permissao-role.service';
import { PermissaoService } from 'src/app/core/services/permissoes.service';
import { RoleService } from 'src/app/core/services/role.service';

@Component({
  selector: 'app-gerenciar-roles',
  templateUrl: './gerenciar-roles.component.html',
  styleUrls: ['./gerenciar-roles.component.css']
})
export class GerenciarRolesComponent implements OnInit {

  role: RoleModel;
  permissoesRoles: any[] = [];
  permissoesRolesSelecionadas: PermissaoRoleCollection;
  roles: RoleModel[] = [];
  permissoes: PermissaoModel[] = [];
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private permissaoRoleService: PermissaoRoleService,
    private permissaoService: PermissaoService,
    private roleService: RoleService,
    private alertService: AlertService,
    private exception: ExceptionService) {
    this.role = new RoleModel();
    this.permissoesRolesSelecionadas = new PermissaoRoleCollection(this.alertService);
  }

  ngOnInit(): void {
    this.onInit();
  }

  onInit() {
    this.findRoles();
    this.findPermissoes();
  }

  salvar() {

    this.permissaoRoleService.saveAll(this.permissoesRolesSelecionadas.all()).subscribe({
      next: () => {
        this.alertService.success('Role/Permissões gravadas com sucesso!', this.options);
        this.onInit();
        this.permissoesRoles = [];
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao salvar as roles!');
      }
    });

  }

  findRoles() {
    this.roleService.findAll().subscribe({
      next: (roles) => {
        this.roles = roles;
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao carregar roles!');
      }
    });
  }

  findPermissoesRoles(role: RoleModel) {
    this.role = role;
    this.permissaoRoleService.findByRole(role.id).subscribe({
      next: (permissoesRoles) => {
        this.permissoesRolesSelecionadas.pushAll(permissoesRoles);
        this.permissoesRoles = [];
        this.permissoes.forEach(permissao => {
          this.permissoesRoles.push(
            {
              permissao: permissao,
              value: this.isSelected(permissao)
            }
          )
        });
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao carregar permissões roles!');
      }
    });
  }

  findPermissoes() {
    this.permissaoService.findAll().subscribe({
      next: (permissoes) => {
        this.permissoes = permissoes;
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao carregar permissões!');
      }
    });
  }

  onCheckboxChange(event: any, permissao: PermissaoModel) {
    if (event.target.checked) {
      this.permissoesRolesSelecionadas.push(
        new PermissaoRoleModel(
          new PermissaoRoleID(permissao, this.role)
        )
      );
    } else {
      this.permissoesRolesSelecionadas.splice(this.getIndex(permissao));
    }
  }  

  getIndex(permissao: PermissaoModel) {
    var indice = -1;
    this.permissoesRolesSelecionadas.all().forEach((permissaoRole, index) => {
      if(permissaoRole.permissaoRoleID.permissao.id == permissao.id) {
        indice = index;
      }
    });
    return indice;
  }

  isSelected(permissao: PermissaoModel): boolean {
    let possui = false;
    this.permissoesRolesSelecionadas.all().forEach(p => {
      if (p.permissaoRoleID.permissao.id == permissao.id) {
        possui = true;
      }
    });
    return possui;
  }

}
