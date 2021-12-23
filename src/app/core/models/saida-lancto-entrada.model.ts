import { LanctoContabilModel } from './lancto-contabil.model';
import { ParcelaLanctoContabilModel } from './parcela-lancto-contabil.model';
import { SaidaLanctoEntradaID } from './saida-lancto-entrada-id.model';

export class SaidaLanctoEntradaModel {

    saidaLanctoEntradaID: SaidaLanctoEntradaID;

    constructor(lancto: LanctoContabilModel, parcela: ParcelaLanctoContabilModel) {
        this.saidaLanctoEntradaID = new SaidaLanctoEntradaID(lancto, parcela);
    }

}