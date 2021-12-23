import { UnidadeMedidaModel } from './unidade-medida.model';
import { CategoriaModel } from './categoria.model';

export class ProdutoModel {

    id!: number;
    unidade!: UnidadeMedidaModel;
    categoria!: CategoriaModel;
    nome!: string;
    descricao!: string;

    constructor() { }

    static builder(produto: ProdutoModel): ProdutoModel {
        var __produto = new ProdutoModel();
        __produto.id = produto.id;
        __produto.unidade = produto.unidade;
        __produto.categoria = produto.categoria;
        __produto.nome = produto.nome;
        __produto.descricao = produto.descricao;
        return __produto;
    }

}