export class UnidadeMedidaModel {

    id!: number;
    nome!: string;
    descricao!: string;

    constructor() { }

    static builder(unidade: UnidadeMedidaModel): UnidadeMedidaModel {
        var __unidade = new UnidadeMedidaModel();
        __unidade.id = unidade.id;
        __unidade.nome = unidade.nome;
        __unidade.descricao = unidade.descricao;
        return __unidade;
    }

}