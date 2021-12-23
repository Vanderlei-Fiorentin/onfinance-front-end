import { ContaCorrenteModel } from './conta-corrente.model';
import { CartaoCreditoModel } from './cartao-credito.model';
import { UsuarioModel } from './usuario.model';
import { EmpresaModel } from './empresa.model';
import { FunctionsUtil } from '../helpers/functions-util';

export class LanctoContabilModel {

    id!: number;
    empresa!: EmpresaModel;
    usuario!: UsuarioModel;
    lanctoEntrada!: LanctoContabilModel;
    cartao!: CartaoCreditoModel;
    conta!: ContaCorrenteModel;
    contaDestino!: ContaCorrenteModel;
    dataLancto!: string;
    tipoLancto!: string;
    tipoPagto!: string;
    ativo!: boolean;
    parcelas!: number;
    inicioVigencia!: number;
    valor!: number;
    juros!: number;
    valorEntrada!: number;
    diaPagamento!: number;
    descricao!: string;
    
    constructor() { }

    static builder(lancamento: LanctoContabilModel): LanctoContabilModel {
        var lancto = new LanctoContabilModel();
        lancto.id = lancamento.id;
        lancto.empresa = lancamento.empresa;
        lancto.usuario = lancamento.usuario;
        lancto.lanctoEntrada = lancamento.lanctoEntrada;
        lancto.cartao = lancamento.cartao;
        lancto.conta = lancamento.conta;
        lancto.contaDestino = lancamento.contaDestino;
        lancto.dataLancto = FunctionsUtil.dateFormat(lancamento.dataLancto);
        lancto.tipoLancto = lancamento.tipoLancto;
        lancto.tipoPagto = lancamento.tipoPagto;
        lancto.ativo = lancamento.ativo;
        lancto.parcelas = lancamento.parcelas;
        lancto.inicioVigencia = lancamento.inicioVigencia;
        lancto.valor = lancamento.valor;
        lancto.juros = lancamento.juros;
        lancto.valorEntrada = lancamento.valorEntrada;
        lancto.diaPagamento = lancamento.diaPagamento;
        lancto.descricao = lancamento.descricao;
        return lancto;
    }

    getValorlancto(): number {
        return (this.valor) ? this.valor : 0 + (this.valorEntrada) ? this.valorEntrada : 0;
    }

    getDescricaoTipoLancto(): string {
        switch(this.tipoPagto) {
            case 'A': return 'À vista';
            case 'P': return 'Parcelado';
            case 'F': return 'Fixo';
            case 'T': return 'Transferência';
            default: return 'Não identificado'
        }
    }

    isDisabledInicioVigencia(): boolean {
        return this.tipoPagto == 'A' || this.tipoPagto == 'T';
    }

    isDisabledValorEntrada(): boolean {
        return this.tipoPagto == 'A' || this.tipoPagto == 'T';
    }

    isDisabledJuros(): boolean {
        return this.tipoPagto == 'A' || this.tipoPagto == 'T';
    }

    isDisabledDiaPagamento(formaPagto: string) {
        return formaPagto == 'C' || this.tipoPagto == 'A' || this.tipoPagto == 'T';
    }

    isTransferencia(): boolean {
        return this.tipoPagto == 'T';
    }

    isParcelado(): boolean {
        return this.tipoPagto == 'P';
    }
}