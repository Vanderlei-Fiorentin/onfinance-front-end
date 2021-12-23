import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PathUrl } from 'src/app/core/helpers/path-url';
import { CartaoCreditoModel } from 'src/app/core/models/cartao-credito.model';
import { DashboardModel } from 'src/app/core/models/dashboard.model';
import { CartaoService } from 'src/app/core/services/cartao.service';
import { ExceptionService } from 'src/app/core/services/exception.service';
import { GraficoDto } from 'src/app/shared/dtos/grafico-dto';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dashboard!: DashboardModel;
  cartoes: CartaoCreditoModel[] = [];
  urlFiles: String = '';
  graficoReceitasDespesas!: GraficoDto;
  graficoProjecaoProximos12Meses!: GraficoDto;
  graficoDespesasPorCategoria!: GraficoDto;
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private http: HttpClient,
    private url: PathUrl,
    private cartaoService: CartaoService,
    private exception: ExceptionService) {

  }

  ngOnInit(): void {
    this.urlFiles = `${environment.API}/files/`;
    this.findDashboard();
    this.findCartoes();
    this.findGraficoProjecaoProximos12Meses();
    this.findGraficoDespesasByCategoria();
    this.findGraficoReceitasDespesas();
    //this.findPDFs();
  }

  findDashboard() {
    this.http.get<DashboardModel>(this.url.DASHBOARD).subscribe({
      next: (dashboard) => {
        this.dashboard = DashboardModel.builder(dashboard);
      },
      error: (error) => {
        this.exception.alert(error, 'Os dados não foram inseridos!');
      }
    });
  }

  findCartoes(): void {
    this.cartaoService.findByFiltro(true).subscribe({
      next: (cartoes) => {
        this.cartoes = cartoes;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar os cartões de crédito!');
      }
    });
  }

  findGraficoReceitasDespesas() {
    this.http.get<any>(`${this.url.DASHBOARD}/grafico-despesas-receitas`).subscribe({
      next: (data) => {
        this.graficoReceitasDespesas = {
          title: data.titulo,
          type: data.tipo,
          data: data.dados,
          columnNames: data.colunas,
          options: {
            seriesType: 'bars',
            series: { 2: { type: 'line' } },
            colors: ['#1976d2', '#eceff1', '#78909c'],
            is3D: true,
            bar: {
              groupWidth: "55%",
              height: "90%"
            },
            hAxis: {
              textStyle: {
                fontSize: 10,
                italic: true
              }
            }
          }
        };
      },
      error: (error) => {
        this.exception.alert(error, 'Os dados do gráfico de despesas e receitas não foram carregados!');
      }
    });
  }

  findGraficoProjecaoProximos12Meses() {
    this.http.get<any>(`${this.url.DASHBOARD}/grafico-projecao`).subscribe({
      next: (data) => {
        this.graficoProjecaoProximos12Meses = {
          title: data.titulo,
          type: data.tipo,
          data: data.dados,
          columnNames: data.colunas,
          options: {
            seriesType: 'bars',
            series: { 2: { type: 'line' } },
            colors: ['#1976d2', '#eceff1', '#78909c'],
            is3D: true,
            bar: {
              groupWidth: "55%",
              height: "90%"
            },
            hAxis: {
              textStyle: {
                fontSize: 10,
                italic: true
              }
            }
          }
        };
      },
      error: (error) => {
        this.exception.alert(error, 'Os dados do gráfico de projeção não foram inseridos!');
      }
    });
  }

  findGraficoDespesasByCategoria() {
    this.http.get<any>(`${this.url.DASHBOARD}/grafico-detalhe-despesas`).subscribe({
      next: (data) => {
        this.graficoDespesasPorCategoria = {
          title: data.titulo,
          type: data.tipo,
          data: data.dados,
          columnNames: data.colunas,
          options: {
            pieHole: 0.4,
            legend: 'none', is3D: true,
            slices: {
              1: { offset: 0.1 },
              3: { offset: 0.2 },
              5: { offset: 0.3 },
              7: { offset: 0.4 },
              9: { offset: 0.5 },
            },
          }
        };
      },
      error: (error) => {
        this.exception.alert(error, 'Os dados do gráfico de despesas por categoria não foram carregados!');
      }
    });
  }

  findPDFs() {
    this.http.get(`${this.urlFiles}files/1`).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        this.exception.alert(error, 'Os arquivos PDFs não foram carregados!');
      }
    });
  }

}
