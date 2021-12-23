import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PathUrl } from 'src/app/core/helpers/path-url';
import { LanctoContabilModel } from 'src/app/core/models/lancto-contabil.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { ExceptionService } from 'src/app/core/services/exception.service';

@Component({
  selector: 'app-listagem-lancamento',
  templateUrl: './listagem-lancamento.component.html',
  styleUrls: ['./listagem-lancamento.component.css']
})
export class ListagemLancamentoComponent implements OnInit {

  lanctos: LanctoContabilModel[] = [];
  lanctosListados: LanctoContabilModel[] = [];
  tiposPagamentos: any = { 'A': 'À vista', 'P': 'Parcelado', 'F': 'Fixo', 'T': 'Transferência' };
  paginaAtual: number = 1;
  pageSize: number = 11;
  pesquisa: string = '';
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private http: HttpClient,
    private url: PathUrl,
    private alertService: AlertService,
    private exception: ExceptionService) { }

  ngOnInit(): void {
    this.findlanctos();
  }

  findlanctos() {
    this.http.get<LanctoContabilModel[]>(`${this.url.LANCTOS_CONTABEIS}?page=${this.paginaAtual}&page_size=${this.pageSize}`).subscribe({
      next: (lanctos) => {
        this.lanctos = lanctos;
        this.lanctosListados = lanctos;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar os lançamentos contábeis!');
      }
    });
  }

  remove(id: number) {
    this.http.delete<LanctoContabilModel[]>(this.url.LANCTOS_CONTABEIS, {
      params: {
        'idAgencia': id.toString()
      }
    }).subscribe({
      next: (lanctos) => {
        this.alertService.success('Dados removidos com sucesso!', this.options);
        this.lanctos = lanctos;
      },
      error: (error) => {
        this.exception.alert(error, 'Os dados não foram removidos!');
      }
    });
  }

  filtrar(pesquisa: string) {
    this.lanctos = this.lanctosListados.filter(l => l.empresa.nome.toLocaleLowerCase().includes(pesquisa.toLocaleLowerCase()));
  }

}
