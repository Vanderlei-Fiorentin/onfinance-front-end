import { LanctoContabilModel } from './lancto-contabil.model';
import { ParcelaLanctoContabilModel } from './parcela-lancto-contabil.model';

export class SaidaLanctoEntradaID {

    lanctoEntrada: LanctoContabilModel;
    parcelaLanctoSaida: ParcelaLanctoContabilModel;

    constructor(lancto: LanctoContabilModel, parcela: ParcelaLanctoContabilModel) {
        this.lanctoEntrada = lancto;
        this.parcelaLanctoSaida = parcela;
    }

}