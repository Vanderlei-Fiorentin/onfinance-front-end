import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PathUrl } from 'src/app/core/helpers/path-url';
import { EmpresaModel } from 'src/app/core/models/empresa.model';
import { FaturaModel } from 'src/app/core/models/fatura.model';
import { PagamentoModel } from 'src/app/core/models/pagamento.model';
import { ParcelaLanctoContabilModel } from 'src/app/core/models/parcela-lancto-contabil.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { EmpresaService } from 'src/app/core/services/empresa.service';
import { ExceptionService } from 'src/app/core/services/exception.service';
import { ParcelaLanctoContabilService } from 'src/app/core/services/parcela-lancto-contabil.service';

@Component({
  selector: 'app-vincular-parcelas',
  templateUrl: './vincular-parcelas.component.html',
  styleUrls: ['./vincular-parcelas.component.css']
})
export class VincularParcelasComponent implements OnInit {

  empresas: EmpresaModel[] = [];
  parcelas: ParcelaLanctoContabilModel[] = [];
  faturas: PagamentoModel[] = [];
  parcelaSelecionada: ParcelaLanctoContabilModel;
  faturaSelecionada: FaturaModel;
  empresaSelecionada: EmpresaModel;
  periodoInicial!: string;
  periodoFinal!: string;
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private http: HttpClient,
    private url: PathUrl,
    private empresaService: EmpresaService,
    private parcelaService: ParcelaLanctoContabilService,
    private alertService: AlertService,
    private exception: ExceptionService) {
    this.parcelaSelecionada = new ParcelaLanctoContabilModel();
    this.faturaSelecionada = new FaturaModel();
    this.empresaSelecionada = new EmpresaModel();
  }

  ngOnInit(): void {
    this.findEmpresas();
    this.findParcelasDesvinculadas();
  }

  init() {
    this.parcelaSelecionada = new ParcelaLanctoContabilModel();
    this.faturaSelecionada = new FaturaModel();
    this.empresaSelecionada = new EmpresaModel();
    this.findParcelasDesvinculadas();
  }

  vincular() {
    this.parcelaSelecionada.fatura = this.faturaSelecionada;
    this.parcelaService.vincularParcela(this.parcelaSelecionada).subscribe({
      next: () => {
        this.alertService.success('Parcela vinculada com sucesso!', this.options);
        this.init();
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível vincular a parcela na fatura!');
      }
    });
  }

  findParcelasDesvinculadas(): void {
    this.parcelaService.findParcelasDesvinculadas().subscribe({
      next: (parcelas) => {
        this.parcelas = parcelas;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar as parcelas!');
      }
    });
  }

  findEmpresas(): void {
    this.empresaService.findAll().subscribe({
      next: (empresas) => {
        this.empresas = empresas;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar as empresas!');
      }
    });
  }

  findFaturas() {
    let inicio = new Date();
    let fim = new Date("3000-12-31");
    let dataInicial = `${inicio.getFullYear()}-${(inicio.getMonth() + 1).toString().padStart(2, '0')}-${(inicio.getDate()).toString().padStart(2, '0')}`;
    let dataFinal = `${fim.getFullYear()}-${fim.getMonth() + 1}-${fim.getDate()}`;

    this.http.get<PagamentoModel[]>(this.url.FATURAS_BY_FILTRO, {
      params: {
        "empresa": this.empresaSelecionada.id.toString(),
        "periodoInicial": dataInicial,
        "periodoFinal": dataFinal,
        "situacao": 'A',
        "tipoLancto": 'S',
        "tipoPagto": 'TD',
        "usuario": '0'
      }
    }).subscribe({
      next: (faturas) => {
        this.faturas = faturas;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar as faturas!');
      }
    });
  }

}
