import { LanctoContabilModel } from './lancto-contabil.model';
import { ProdutoModel } from './produto.model';

export class ProdutoLanctoSaidaID {

    lanctoSaida: LanctoContabilModel;
    produto: ProdutoModel;

    constructor(lancto: LanctoContabilModel, produto: ProdutoModel) {
        this.lanctoSaida = lancto;
        this.produto = produto;
    }

}