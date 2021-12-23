import { AgenciaModel } from "../models/agencia.model";
import { CartaoCreditoModel } from "../models/cartao-credito.model";
import { ContaCorrenteModel } from "../models/conta-corrente.model";

export class FunctionsUtil {

    static dateFormat(args: any): string {
        if(args == null) return '';
        var ano = args[0];
        var mes = (parseInt(args[1]) < 10) ? `0${args[1]}` : args[1];
        var dia = (parseInt(args[2]) < 10) ? `0${args[2]}` : args[2];
        return `${ano}-${mes}-${dia}`;
    }

    static getNomeCartao(cartao: CartaoCreditoModel): string {
        if(cartao == null) return '';
        return `${cartao.conta.agencia.banco.nome} - XXXX-XXXX-XXXX-${cartao.numero} (${cartao.conta.usuario.nome})`;
    }

    static getNomeConta(conta: ContaCorrenteModel): string {
        if(conta == null) return '';
        return `${conta.agencia.banco.nome} ${conta.agencia.numero} ${conta.agencia.digitoVerificador} ${conta.numero}/${conta.digitoVerificador} (${conta.usuario.nome})`;
    }

    static getAgencia(agencia: AgenciaModel) {
        if(agencia == null) return '';
        return `${agencia.banco.nome} - Agência ${agencia.numero}/${agencia.digitoVerificador}`;
    }

}