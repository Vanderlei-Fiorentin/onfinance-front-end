import { ParcelaLanctoContabilModel } from './parcela-lancto-contabil.model';

export class RenegociacaoModel {

  parcelas!: ParcelaLanctoContabilModel[];
  dataRenegociacao!: Date;
  vencimento!: Date;
  juros!: number;
  multa!: number;
  desconto!: number;
  valorEntrada!: number;
  qtdParcelas!: number;
  diaPagamento!: number;
  tipoPagto!: String;
  inicioVigencia!: number;

  constructor() { }

  static builder(renegociacao: RenegociacaoModel): RenegociacaoModel {
    var __renegociacao = new RenegociacaoModel();
    __renegociacao.parcelas = renegociacao.parcelas;
    __renegociacao.dataRenegociacao = renegociacao.dataRenegociacao;
    __renegociacao.vencimento = renegociacao.vencimento;
    __renegociacao.juros = renegociacao.juros;
    __renegociacao.multa = renegociacao.multa;
    __renegociacao.desconto = renegociacao.desconto;
    __renegociacao.valorEntrada = renegociacao.valorEntrada;
    __renegociacao.qtdParcelas = renegociacao.qtdParcelas;
    __renegociacao.diaPagamento = renegociacao.diaPagamento;
    __renegociacao.tipoPagto = renegociacao.tipoPagto;
    __renegociacao.inicioVigencia = renegociacao.inicioVigencia;
    return __renegociacao;
  }
}