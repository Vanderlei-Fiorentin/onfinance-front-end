import { LanctoContabilModel } from './lancto-contabil.model';
import { ProdutoLanctoSaidaID } from './produto-lancto-saida-id.model';
import { ProdutoModel } from './produto.model';

export class ProdutoLanctoSaidaModel {

    produtoLanctoSaidaID: ProdutoLanctoSaidaID;
    valor: number;
    quantidade: number;

    constructor(valor: number, quantidade: number, lancto: LanctoContabilModel, produto: ProdutoModel) {
        this.valor = valor;
        this.quantidade = quantidade;
        this.produtoLanctoSaidaID = new ProdutoLanctoSaidaID(lancto, produto);
    }

}