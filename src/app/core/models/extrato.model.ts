import { ContaCorrenteModel } from './conta-corrente.model';
import { PagamentoModel } from './pagamento.model';

export class ExtratoModel {

    id!: number;
    conta!: ContaCorrenteModel;
    pagamento!: PagamentoModel;
    operacao!: string;
    historico!: string;
    dataOperacao!: Date;
    saldo!: number;

    constructor() { }

    static builder(extrato: ExtratoModel): ExtratoModel {
        var __extrato = new ExtratoModel();
        __extrato.id = extrato.id;
        __extrato.conta = extrato.conta;
        __extrato.pagamento = extrato.pagamento;
        __extrato.operacao = extrato.operacao;
        __extrato.historico = extrato.historico;
        __extrato.dataOperacao = extrato.dataOperacao;
        __extrato.saldo = extrato.saldo;
        return __extrato;
    }

    getValorPagamento(): number {
        return parseFloat((this.pagamento.valor + this.pagamento.juros + this.pagamento.multa - this.pagamento.desconto).toFixed(2));
    }

}