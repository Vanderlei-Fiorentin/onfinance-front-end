import { CartaoCreditoModel } from "./cartao-credito.model";
import { ContaCorrenteModel } from "./conta-corrente.model";
import { FaturaModel } from "./fatura.model";

export class PagamentoModel {

    id: number | undefined;
    fatura!: FaturaModel;
    cartao!: CartaoCreditoModel;
    conta!: ContaCorrenteModel;
    valor!: number;
    juros!: number;
    multa!: number;
    desconto!: number;
    dataPagamento!: String;
    tipoPagamento!: String;

    constructor() { }

    static builder(pagamento: PagamentoModel): PagamentoModel {
        var pagto = new PagamentoModel();
        pagto.id = (pagamento.id == 0) ? undefined : pagamento.id;
        pagto.fatura = pagamento.fatura;
        pagto.cartao = pagamento.cartao;
        pagto.conta = pagamento.conta;
        pagto.valor = pagamento.valor;
        pagto.juros = pagamento.juros;
        pagto.multa = pagamento.multa;
        pagto.desconto = pagamento.desconto;
        pagto.dataPagamento = pagamento.dataPagamento;
        pagto.tipoPagamento = pagamento.tipoPagamento;
        return pagto;
    }

    getValorEmAberto(): number {
        return parseFloat((this.fatura.valor - this.valor).toFixed(2));
    }

    isPaga(): boolean {
        return (this.getValorEmAberto() > 0) ? false : true;
    }

}