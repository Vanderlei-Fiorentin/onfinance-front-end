import { LanctoContabilModel } from './lancto-contabil.model';
import { EventoModel } from './evento.model';

export class EventoLanctoEntradaID {

    lanctoEntrada: LanctoContabilModel;
    evento: EventoModel;

    constructor(lancto: LanctoContabilModel, evento: EventoModel) {
        this.lanctoEntrada = lancto;
        this.evento = evento;
    }

}