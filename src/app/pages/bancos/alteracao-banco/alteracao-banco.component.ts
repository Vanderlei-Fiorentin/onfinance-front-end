import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BancoModel } from 'src/app/core/models/banco.model';
import { EmpresaModel } from 'src/app/core/models/empresa.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { BancoService } from 'src/app/core/services/banco.service';
import { EmpresaService } from 'src/app/core/services/empresa.service';
import { ExceptionService } from 'src/app/core/services/exception.service';

@Component({
  selector: 'app-alteracao-banco',
  templateUrl: './alteracao-banco.component.html',
  styleUrls: ['./alteracao-banco.component.css']
})
export class AlteracaoBancoComponent implements OnInit {

  banco!: BancoModel;
  empresas: EmpresaModel[] = [];
  logo!: File;
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private bancoService: BancoService,
    private empresaService: EmpresaService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService, 
    private exception: ExceptionService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.findById(params['id']);
    });
    this.findEmpresas();
  }

  findById(id: number) {
    this.bancoService.findById(id).subscribe({
      next: (banco) => {
        this.banco = BancoModel.builder(banco);
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao buscar o banco!');
      }
    });
  }

  update() {

    var formulario: FormData = new FormData();

    if (this.logo !== undefined) {
      formulario.append('file', this.logo, this.logo.name);
    }

    formulario.append('banco', JSON.stringify(this.banco));

    this.bancoService.updateFormData(formulario).subscribe({
      next: () => {
        this.alertService.success('Banco atualizado com sucesso!', this.options);
        this.router.navigate(['bancos']);
      },
      error: (error) => {
        this.exception.alert(error, 'Os dados não foram alterados!');
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
    console.log(this.logo);
  }

}
