import { ParcelaLanctoContabilModel } from "../models/parcela-lancto-contabil.model";
import { SaidaLanctoEntradaModel } from "../models/saida-lancto-entrada.model";
import { AlertService } from "../services/alert.service";
import { Collection } from "./collection";

export class ParcelaCollection extends Collection<SaidaLanctoEntradaModel>{

    options = {
        autoClose: true,
        keepAfterRouteChange: true
    };

    constructor(private alertService: AlertService) {
        super();
    }

    push(saida: SaidaLanctoEntradaModel) {
        if (this.isValid(saida.saidaLanctoEntradaID.parcelaLanctoSaida) === true) {
            this.data.push(saida);
        } else {
            this.alertService.warn('Este lançamento já está adicionado na lista!', this.options);
        }
    };

    isValid(parcela: ParcelaLanctoContabilModel): boolean {
        return (this.data.findIndex(s => s.saidaLanctoEntradaID.parcelaLanctoSaida.id === parcela.id) === -1);
    };

    getSoma(): number {
        var totalParcelas: number = 0;
        if (this.data.length > 0) {
            this.data.forEach(parcela => {
                totalParcelas += parcela.saidaLanctoEntradaID.parcelaLanctoSaida.valor;
            });
        }
        return parseFloat(totalParcelas.toFixed(2));
    }
}