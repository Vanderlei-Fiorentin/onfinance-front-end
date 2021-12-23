import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpresaModel } from 'src/app/core/models/empresa.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { EmpresaService } from 'src/app/core/services/empresa.service';
import { ExceptionService } from 'src/app/core/services/exception.service';

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.css']
})
export class CadastroEmpresaComponent implements OnInit {

  empresa: EmpresaModel;
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private router: Router,
    private empresaService: EmpresaService,
    private alertService: AlertService,
    private exception: ExceptionService) {
    this.empresa = new EmpresaModel();
  }

  ngOnInit() { }

  save() {
    alert('Realmente deseja salvar');
    this.empresaService.save(this.empresa).subscribe({
      next: () => {
        this.router.navigate(['empresas']);
        this.alertService.success('Empresa cadastrada com sucesso!', this.options);
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível cadastrar a empresa!');
      }
    });
  }

}
