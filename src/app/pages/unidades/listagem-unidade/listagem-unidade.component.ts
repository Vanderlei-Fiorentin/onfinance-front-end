import { Component, OnInit } from '@angular/core';
import { UnidadeMedidaModel } from 'src/app/core/models/unidade-medida.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { ExceptionService } from 'src/app/core/services/exception.service';
import { UnidadeService } from 'src/app/core/services/unidade.service';

@Component({
  selector: 'app-listagem-unidade',
  templateUrl: './listagem-unidade.component.html',
  styleUrls: ['./listagem-unidade.component.css']
})
export class ListagemUnidadeComponent implements OnInit {

  unidades: UnidadeMedidaModel[] = [];
  unidadesListadas: UnidadeMedidaModel[] = [];
  paginaAtual: number = 1;
  pesquisa: string = '';
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private unidadeService: UnidadeService,
    private alertService: AlertService,
    private exception: ExceptionService) { }

  ngOnInit(): void {
    this.getUnidades();
  }

  getUnidades() {
    this.unidadeService.findAll().subscribe({
      next: (unidades) => {
        this.paginaAtual = 1;
        this.unidades = unidades;
        this.unidadesListadas = unidades;
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao carregar as unidades de medida!');
      }
    });
  }

  remove(id: number) {
    this.unidadeService.remove(id).subscribe({
      next: () => {
        this.alertService.success('Unidade de medida removida com sucesso!', this.options);
        this.getUnidades();
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao remover a unidade de medida!');
      }
    });
  }

  filtrar(pesquisa: string) {
    this.unidades = this.unidadesListadas.filter(u => u.descricao.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase()));
  }

}
