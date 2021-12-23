import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PathUrl } from 'src/app/core/helpers/path-url';
import { PagamentoModel } from 'src/app/core/models/pagamento.model';
import { PerfilUsuarioModel } from 'src/app/core/models/perfil-usuario.model';
import { ExceptionService } from 'src/app/core/services/exception.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  perfil: PerfilUsuarioModel;
  despesasVencidas: PagamentoModel[] = [];
  receitasVencidas: PagamentoModel[] = [];
  sistema: string = '';
  urlFiles: string = '';
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private http: HttpClient,
    private url: PathUrl,
    private exception: ExceptionService) {
    this.sistema = environment.sistema;
    this.perfil = JSON.parse(window.localStorage.getItem('perfil') ?? '');
  }

  ngOnInit() {
    this.urlFiles = `${environment.API}/files/`;
    this.findDespesasVencidas();
    this.findReceitasVencidas();
  }

  logout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('perfil');
    window.location.href = environment.login;
  }

  findDespesasVencidas() {
    this.http.get<PagamentoModel[]>(this.url.FATURAS_BY_FILTRO, {
      params: {
        "empresa": '0',
        "periodoInicial": 'null',
        "periodoFinal": 'null',
        "situacao": 'V',
        "tipoLancto": 'S',
        "tipoPagto": 'TD',
        "usuario": '0'
      }
    }).subscribe({
      next: (despesas) => {
        this.despesasVencidas = despesas;
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao carregar as despesas vencidas!');
      }
    });
  }

  findReceitasVencidas() {
    this.http.get<PagamentoModel[]>(this.url.FATURAS_BY_FILTRO, {
      params: {
        "empresa": '0',
        "periodoInicial": 'null',
        "periodoFinal": 'null',
        "situacao": 'V',
        "tipoLancto": 'E',
        "tipoPagto": 'TD',
        "usuario": '0'
      }
    }).subscribe({
      next: (receitas) => {
        this.receitasVencidas = receitas;
      },
      error: (error) => {
        this.exception.alert(error, 'Erro ao carregar as receitas vencidas!');
      }
    });
  }

}
