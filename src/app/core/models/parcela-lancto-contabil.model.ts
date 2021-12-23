import { LanctoContabilModel } from './lancto-contabil.model';
import { FaturaModel } from './fatura.model';

export class ParcelaLanctoContabilModel {

    id!: number;
    lanctoContabil!: LanctoContabilModel;
    fatura!: FaturaModel;
    vencimento!: Date;
    parcela!: number;
    valor!: number;

    constructor() { }

    static builder(parcela: ParcelaLanctoContabilModel): ParcelaLanctoContabilModel {
        var __parcela = new ParcelaLanctoContabilModel();
        __parcela.id = parcela.id;
        __parcela.lanctoContabil = parcela.lanctoContabil;
        __parcela.fatura = parcela.fatura;
        __parcela.vencimento = parcela.vencimento;
        __parcela.parcela = parcela.parcela;
        __parcela.valor = parcela.valor;
        return __parcela;
    }

}