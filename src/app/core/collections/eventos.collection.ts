import { EventoLanctoEntradaModel } from "../models/evento-lancto-entrada.model";
import { EventoModel } from "../models/evento.model";
import { AlertService } from "../services/alert.service";
import { Collection } from "./collection";

export class EventoCollection extends Collection<EventoLanctoEntradaModel>{

    options = {
        autoClose: true,
        keepAfterRouteChange: true
    };

    constructor(private alertService: AlertService) {
        super();
    }

    push(evento: EventoLanctoEntradaModel) {
        if (this.isValid(evento.eventoLanctoEntradaID.evento) === true) {
            this.data.push(evento);
        } else {
            this.alertService.warn(`O evento ${evento.eventoLanctoEntradaID.evento.nome} já está adicionado na lista!`, this.options);
        }
    };

    isValid(evento: EventoModel): boolean {
        return (this.data.findIndex(e => e.eventoLanctoEntradaID.evento.id === evento.id) === -1);
    };

    getSoma(): number {
        var totalEventos: number = 0;
        if (this.data.length > 0) {
            this.data.forEach(evento => {
                totalEventos = (evento.eventoLanctoEntradaID.evento.tipo === 'P') ? totalEventos + evento.valor : totalEventos - evento.valor;
            });
        }
        return parseFloat(totalEventos.toFixed(2));
    }
}