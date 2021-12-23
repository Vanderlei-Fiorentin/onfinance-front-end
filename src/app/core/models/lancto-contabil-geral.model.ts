import { LanctoContabilModel } from './lancto-contabil.model';
import { EventoLanctoEntradaModel } from './evento-lancto-entrada.model';
import { ProdutoLanctoSaidaModel } from './produto-lancto-saida.model';
import { SaidaLanctoEntradaModel } from './saida-lancto-entrada.model';

export class LanctoContabilGeral {

    lancto: LanctoContabilModel;
    eventos: EventoLanctoEntradaModel[];
    produtos: ProdutoLanctoSaidaModel[];
    saidas: SaidaLanctoEntradaModel[];

    constructor(lancto: LanctoContabilModel, eventos: EventoLanctoEntradaModel[], produtos: ProdutoLanctoSaidaModel[], saidas: SaidaLanctoEntradaModel[]) {
        this.lancto = lancto;
        this.eventos = eventos;
        this.produtos = produtos;
        this.saidas = saidas;
    }
    
}