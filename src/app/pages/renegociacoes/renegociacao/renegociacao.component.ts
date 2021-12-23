import { Component, OnInit } from '@angular/core';
import { CartaoCreditoModel } from 'src/app/core/models/cartao-credito.model';
import { ContaCorrenteModel } from 'src/app/core/models/conta-corrente.model';
import { LanctoContabilModel } from 'src/app/core/models/lancto-contabil.model';
import { ParcelaLanctoContabilModel } from 'src/app/core/models/parcela-lancto-contabil.model';
import { RenegociacaoModel } from 'src/app/core/models/renegociacao.model';
import { AlertService } from 'src/app/core/services/alert.service';
import { ExceptionService } from 'src/app/core/services/exception.service';
import { LanctoContabilService } from 'src/app/core/services/lancto-contabil.service';
import { ParcelaLanctoContabilService } from 'src/app/core/services/parcela-lancto-contabil.service';
import { RenegociarParcelaService } from 'src/app/core/services/renegociar-parcela.service';

@Component({
  selector: 'app-renegociacao',
  templateUrl: './renegociacao.component.html',
  styleUrls: ['./renegociacao.component.css']
})
export class RenegociacaoComponent implements OnInit {

  renegociacao: RenegociacaoModel;
  lancto: LanctoContabilModel;
  lanctos: LanctoContabilModel[] = [];
  parcelas: ParcelaLanctoContabilModel[] = [];
  contas: ContaCorrenteModel[] = [];
  cartoes: CartaoCreditoModel[] = [];
  formaPagto: string = 'D';
  valorTotal: number = 0;
  totalParcelas: number = 0;
  valorParcelasSelecionadas: number = 0;
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private lanctoContabilService: LanctoContabilService,
    private parcelaLanctoContabilService: ParcelaLanctoContabilService,
    private renegociarParcelaService: RenegociarParcelaService,
    private alertService: AlertService, 
    private exception: ExceptionService) {
    this.renegociacao = new RenegociacaoModel();
    this.lancto = new LanctoContabilModel();
  }

  ngOnInit() {
    this.init();
  }

  init() {
    this.renegociacao.juros = 0;
    this.renegociacao.multa = 0;
    this.renegociacao.valorEntrada = 0;
    this.renegociacao.desconto = 0;
    this.findLanctosContabil();
    this.parcelas = [];
  }

  save() {
    this.renegociarParcelaService.save(this.renegociacao).subscribe({
      next: () => {
        this.init();
        this.alertService.success('Lançamento renegociado com sucesso!', this.options);
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível renegociar o lançamento!');
      }
    })
  }

  findLanctosContabil() {
    this.lanctoContabilService.findLanctosSaidasAberto('saidas', 'abertas').subscribe({
      next: (lanctos) => {
        this.lanctos = lanctos;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar os lançamentos em aberto!');
      }
    });
  }

  findParcelas(lancto: LanctoContabilModel) {
    this.valorTotal = 0;
    this.valorParcelasSelecionadas = 0;
    this.parcelaLanctoContabilService.findParcelasByLancto(lancto.id).subscribe({
      next: (parcelas) => {
        this.parcelas = parcelas;
        parcelas.forEach(p => {
          this.valorTotal += p.valor;
        });
        this.totalParcelas = parcelas.length;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar as parcelas do lançamento!');
      }
    });
  }

  somarParcelas() {
    var total = 0;
    this.renegociacao.parcelas.forEach(p => {
      total += p.valor;
    });
    this.valorParcelasSelecionadas = total;
  }

}
