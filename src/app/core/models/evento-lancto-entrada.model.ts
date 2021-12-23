import { EventoLanctoEntradaID } from './evento-lancto-entrada-id.model';
import { EventoModel } from './evento.model';
import { LanctoContabilModel } from './lancto-contabil.model';

export class EventoLanctoEntradaModel {

    eventoLanctoEntradaID: EventoLanctoEntradaID;
    valor: number;
    quantidade: number;

    constructor(valor: number, quantidade: number, lancto: LanctoContabilModel, evento: EventoModel) {
        this.valor = valor;
        this.quantidade = quantidade;
        this.eventoLanctoEntradaID = new EventoLanctoEntradaID(lancto, evento);
    }

}