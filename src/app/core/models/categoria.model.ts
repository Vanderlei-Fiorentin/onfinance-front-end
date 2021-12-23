import { CategoriaRoutingModule } from "src/app/pages/categorias/categorias-routing.module";

export class CategoriaModel {

    id!: number;
    nome!: string;
    descricao!: string;

    constructor() { }

    static builder(categoria: CategoriaModel): CategoriaModel {
        var __categoria = new CategoriaModel()
        __categoria.id = categoria.id;
        __categoria.nome = categoria.nome;
        __categoria.descricao = categoria.descricao;
        return __categoria;
    }

}