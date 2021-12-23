import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BancoModel } from 'src/app/core/models/banco.model';
import { EmpresaModel } from 'src/app/core/models/empresa.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { BancoService } from 'src/app/core/services/banco.service';
import { EmpresaService } from 'src/app/core/services/empresa.service';
import { ExceptionService } from 'src/app/core/services/exception.service';

@Component({
  selector: 'app-cadastro-banco',
  templateUrl: './cadastro-banco.component.html',
  styleUrls: ['./cadastro-banco.component.css']
})
export class CadastroBancoComponent implements OnInit {

  banco: BancoModel;
  empresas: EmpresaModel[] = [];
  logo!: File;
  preview: String = '';
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };


  constructor(
    private bancoService: BancoService,
    private empresaService: EmpresaService,
    private router: Router,
    private alertService: AlertService, 
    private exception: ExceptionService) {
    this.banco = new BancoModel();
  }

  ngOnInit() {
    this.findEmpresas();
  }

  save() {

    var formulario: FormData = new FormData();

    if (this.logo !== undefined) {
      formulario.append('file', this.logo, this.logo.name);
    }

    formulario.append('banco', JSON.stringify(this.banco));

    this.bancoService.saveFormData(formulario).subscribe({
      next: () => {
        this.alertService.success('Banco cadastrado com sucesso!', this.options);
        this.router.navigate(['bancos']);
      },
      error: (error) => {
        this.exception.alert(error, 'Os dados não foram inseridos!');
      }
    });

  }

  findEmpresas() {
    this.empresaService.findAll().subscribe({
      next: (empresas) => {
        this.empresas = empresas;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar as empresas!');
      }
    })
  }

  onChange(event: any) {
    this.logo = event.target.files[0];
    this.preview = this.logo ? `url(${URL.createObjectURL(this.logo)})` : '';
  }

}
