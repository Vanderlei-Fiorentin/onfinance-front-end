import { BancoModel } from './banco.model';

export class AgenciaModel {

    id!: number;
    banco!: BancoModel;
    numero!: number;
    digitoVerificador!: number;

    constructor() { }

    static builder(agencia: AgenciaModel) {
        var _agencia = new AgenciaModel();
        _agencia.id = agencia.id;
        _agencia.banco = agencia.banco;
        _agencia.numero = agencia.numero;
        _agencia.digitoVerificador = agencia.digitoVerificador;
        return _agencia;
    }
}