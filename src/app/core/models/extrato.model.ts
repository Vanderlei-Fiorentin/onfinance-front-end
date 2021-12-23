import { ContaCorrenteModel } from './conta-corrente.model';
import { PagamentoModel } from './pagamento.model';

export class ExtratoModel {

    id!: number;
    conta!: ContaCorrenteModel;
    pagamento!: PagamentoModel;
    operacao!: string;
    historico!: string;
    dataOperacao!: Date;
    saldo!: number;

    constructor() { }

}