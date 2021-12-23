import { ProdutoLanctoSaidaModel } from "../models/produto-lancto-saida.model";
import { ProdutoModel } from "../models/produto.model";
import { AlertService } from "../services/alert.service";
import { Collection } from "./collection";

export class ProdutoCollection extends Collection<ProdutoLanctoSaidaModel> {

    options = {
        autoClose: true,
        keepAfterRouteChange: true
    };

    constructor(private alertService: AlertService) {
        super();
    }

    push(produto: ProdutoLanctoSaidaModel) {
        if (this.isValid(produto.produtoLanctoSaidaID.produto) === true) {
            this.data.push(produto);
        } else {
            this.alertService.warn(`O produto ${produto.produtoLanctoSaidaID.produto.nome} já está adicionado na lista!`, this.options);
        }
    };

    isValid(produto: ProdutoModel): boolean {
        return (this.data.findIndex(p => p.produtoLanctoSaidaID.produto.id === produto.id) === -1);
    };

    getSoma(): number {
        var totalProdutos: number = 0;
        if (this.data.length > 0) {
            this.data.forEach(produto => {
                totalProdutos += produto.valor;
            });
        }
        return parseFloat(totalProdutos.toFixed(2));
    }
}