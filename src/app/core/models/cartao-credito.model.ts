import { ContaCorrenteModel } from './conta-corrente.model';
import { BandeiraModel } from './bandeira.model';

export class CartaoCreditoModel {

    id!: number;
    bandeira!: BandeiraModel;
    conta!: ContaCorrenteModel;
    numero!: number;
    limiteUtilizado!: number;
    limite!: number;
    diaVencto!: number;
    fechamento!: number;
    validade!: string;
    debitoAutomatico!: boolean;
    ativo!: boolean;

    constructor() { }

    static builder(cartao: CartaoCreditoModel): CartaoCreditoModel {
        var __cartao = new CartaoCreditoModel();
        __cartao.id = cartao.id;
        __cartao.bandeira = cartao.bandeira;
        __cartao.conta = cartao.conta;
        __cartao.numero = cartao.numero;
        __cartao.limiteUtilizado = cartao.limiteUtilizado;
        __cartao.limite = cartao.limite;
        __cartao.diaVencto = cartao.diaVencto;
        __cartao.fechamento = cartao.fechamento;
        __cartao.validade = cartao.validade;
        __cartao.debitoAutomatico = cartao.debitoAutomatico;
        __cartao.ativo = cartao.ativo;
        return __cartao;
    }

}