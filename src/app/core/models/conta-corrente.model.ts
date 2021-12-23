import { AgenciaModel } from './agencia.model';
import { UsuarioModel } from './usuario.model';

export class ContaCorrenteModel {

    id!: number;
    agencia!: AgenciaModel;
    usuario!: UsuarioModel;
    numero!: number;
    digitoVerificador!: number;
    saldoAnterior!: number;
    saldo!: number;
    chequeEspecial!: number;
    ativo!: boolean;

    constructor() { }

    static builder(conta: ContaCorrenteModel): ContaCorrenteModel {
        var __conta = new ContaCorrenteModel();
        __conta.id = conta.id;
        __conta.agencia = conta.agencia;
        __conta.usuario = conta.usuario;
        __conta.numero = conta.numero;
        __conta.digitoVerificador = conta.digitoVerificador;
        __conta.saldoAnterior = conta.saldoAnterior;
        __conta.saldo = conta.saldo;
        __conta.chequeEspecial = conta.chequeEspecial;
        __conta.ativo = conta.ativo;
        return __conta;
    }

    getNomeConta(): string {
        return `${this.agencia.banco.nome} ${this.agencia.numero} ${this.agencia.digitoVerificador} ${this.numero}/${this.digitoVerificador} (${this.usuario.nome})`;
    }

}