import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleModel } from 'src/app/core/models/role.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { ExceptionService } from 'src/app/core/services/exception.service';
import { RoleService } from 'src/app/core/services/role.service';

@Component({
  selector: 'app-alteracao-role',
  templateUrl: './alteracao-role.component.html',
  styleUrls: ['./alteracao-role.component.css']
})
export class AlteracaoRoleComponent implements OnInit {

  role: RoleModel;
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private roleService: RoleService,
    private alertService: AlertService,
    private exception: ExceptionService,
    private router: Router,
    private route: ActivatedRoute) {
    this.role = new RoleModel();
  }

  ngOnInit(): void { 
    this.route.params.subscribe(params => {
      this.findRoleById(params['id'])
    });
  }

  update() {
    this.roleService.update(this.role).subscribe({
      next: () => {
        this.alertService.success('Role alterada com sucesso!', this.options);
        this.router.navigate(['roles']);
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao alterar a role!');
      }
    });
  }

  findRoleById(id: number) {
    this.roleService.findById(id).subscribe({
      next: (role) => {
        this.role = role;
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao buscar a role!');
      }
    });
  }

}
