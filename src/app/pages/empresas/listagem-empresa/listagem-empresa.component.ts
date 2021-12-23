import { Component, OnInit } from '@angular/core';
import { EmpresaModel } from 'src/app/core/models/empresa.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { EmpresaService } from 'src/app/core/services/empresa.service';
import { ExceptionService } from 'src/app/core/services/exception.service';

@Component({
  selector: 'app-listagem-empresa',
  templateUrl: './listagem-empresa.component.html',
  styleUrls: ['./listagem-empresa.component.css']
})
export class ListagemEmpresaComponent implements OnInit {

  empresas: EmpresaModel[] = [];
  empresasListadas: EmpresaModel[] = [];
  paginaAtual: number = 1;
  pesquisa: string = '';
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private empresaService: EmpresaService,
    private alertService: AlertService,
    private exception: ExceptionService) { }

  ngOnInit() {
    this.getEmpresas();
  }

  getEmpresas() {
    this.empresaService.findAll().subscribe({
      next: (empresas) => {
        this.paginaAtual = 1;
        this.empresas = empresas;
        this.empresasListadas = this.empresas;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar as empresas!');
      }
    });
  }

  remove(id: number) {
    this.empresaService.remove(id).subscribe({
      next: () => {
        this.alertService.success('Empresa removida com sucesso!', this.options);
        this.getEmpresas();
      },
      error: (error) => {
        this.exception.alert(error, 'Os dados não foram removidos!');
      }
    });
  }

  filtrar(pesquisa: string) {
    this.empresas = this.empresasListadas.filter(e => e.nome.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase()));
  }

}
