import { EmpresaModel } from './empresa.model';

export class FaturaModel {

    id!: number;
    empresa!: EmpresaModel;
    vencimento!: string;
    valor!: number;

    constructor() { }

    static builder(id: number, empresa: EmpresaModel, vencimento: string, valor: number): FaturaModel {
        var fatura = new FaturaModel();
        fatura.id = id;
        fatura.empresa = empresa;
        fatura.vencimento = vencimento;
        fatura.valor = valor;
        return fatura;
    }

}