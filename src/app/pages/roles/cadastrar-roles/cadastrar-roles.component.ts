import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleModel } from 'src/app/core/models/role.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { ExceptionService } from 'src/app/core/services/exception.service';
import { RoleService } from 'src/app/core/services/role.service';

@Component({
  selector: 'app-cadastrar-roles',
  templateUrl: './cadastrar-roles.component.html',
  styleUrls: ['./cadastrar-roles.component.css']
})
export class CadastrarRolesComponent implements OnInit {

  role: RoleModel;
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private roleService: RoleService,
    private alertService: AlertService,
    private exception: ExceptionService,
    private router: Router) {
    this.role = new RoleModel();
  }

  ngOnInit(): void { }

  save() {
    this.roleService.save(this.role).subscribe({
      next: () => {
        this.alertService.success('Role cadastrada com sucesso!', this.options);
        this.router.navigate(['roles']);
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao cadastrar a role!');
      }
    });

  }

}
