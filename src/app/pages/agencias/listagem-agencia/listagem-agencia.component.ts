import { Component, OnInit } from '@angular/core';
import { AgenciaModel } from 'src/app/core/models/agencia.model';
import { AgenciaService } from 'src/app/core/services/agencia.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { ExceptionService } from 'src/app/core/services/exception.service';

@Component({
  selector: 'app-listagem-agencia',
  templateUrl: './listagem-agencia.component.html',
  styleUrls: ['./listagem-agencia.component.css']
})
export class ListagemAgenciaComponent implements OnInit {

  agencias: AgenciaModel[] = [];
  agenciasListadas: AgenciaModel[] = [];
  paginaAtual: number = 1;
  pesquisa: string = '';
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private agenciaService: AgenciaService, 
    private alertService: AlertService, 
    private exception: ExceptionService) { }

  ngOnInit() {
    this.getAgencias();
    this.paginaAtual = 1;
  }

  getAgencias() {
    this.agenciaService.findAll().subscribe({
      next: (agencias) => {
        this.paginaAtual = 1;
        this.agencias = agencias;
        this.agenciasListadas = agencias;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar as agências bancárias!');
      }
    });
  }

  remove(id: number) {
    this.agenciaService.remove(id).subscribe({
      next: (agencias) => {
        this.alertService.success('Agência removida com sucesso!', this.options);
        this.getAgencias();
      },
      error: (error) => {
        this.exception.alert(error, 'Os dados não foram removidos!');
      }
    });
  }

  filtrar(pesquisa: string) {
    this.agencias = this.agenciasListadas.filter(a => a.banco.nome.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase()));
    this.paginaAtual = 1;
  }

}
