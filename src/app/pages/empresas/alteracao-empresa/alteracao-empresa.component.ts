import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaModel } from 'src/app/core/models/empresa.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { EmpresaService } from 'src/app/core/services/empresa.service';
import { ExceptionService } from 'src/app/core/services/exception.service';

@Component({
  selector: 'app-alteracao-empresa',
  templateUrl: './alteracao-empresa.component.html',
  styleUrls: ['./alteracao-empresa.component.css']
})
export class AlteracaoEmpresaComponent implements OnInit {

  empresa!: EmpresaModel;
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private empresaService: EmpresaService,
    private alertService: AlertService,
    private exception: ExceptionService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loadById(params['id']);
    });
  }

  update() {
    this.empresaService.update(this.empresa).subscribe({
      next: () => {
        this.alertService.success('Empresa alterada com sucesso!', this.options);
        this.router.navigate(['empresas']);
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível alterar a empresa!');
      }
    });
  }

  loadById(id: number) {
    this.empresaService.findById(id).subscribe({
      next: (empresa) => {
        this.empresa = EmpresaModel.builder(empresa);
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar a empresa!');
      }
    });
  }

}
