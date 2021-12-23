import { EmpresaModel } from './empresa.model';

export class BancoModel {

    id!: number;
    nome!: string;
    empresa!: EmpresaModel;
    codigo!: number;
    logo!: string;

    constructor() { }

    static builder(banco: BancoModel): BancoModel {
        var __banco = new BancoModel();
        __banco.id = banco.id;
        __banco.nome = banco.nome;
        __banco.empresa = banco.empresa;
        __banco.codigo = banco.codigo;
        __banco.logo = banco.logo;
        return __banco;
    }

}