import { PagamentoModel } from './pagamento.model';

export class DashboardModel {

    lanctosEntradaAVencer!: PagamentoModel[];
    lanctosSaidaAVencer!: PagamentoModel[];
    lanctosEntradaVencidos!: PagamentoModel[];
    lanctosSaidaVencidos!: PagamentoModel[];
    lanctosEntradaEmAbertoMesesAnteriores!: PagamentoModel[];
    lanctosSaidaEmAbertoMesesAnteriores!: PagamentoModel[];
    totalSaidasPagas!: number;
    totalEntradasRecebidas!: number;
    totalSaidasVencidas!: number;
    totalEntradasVencidas!: number;
    totalSaidasAVencer!: number;
    totalEntradasAVencer!: number;
    totalEntradasEmAbertoMesesAnteriores!: number;
    totalSaidasEmAbertoMesesAnteriores!: number;
    totalSaidasMesAnterior!: number;
    totalEntradasMesAnterior!: number;

    constructor() { }

    static builder(dashboard: DashboardModel): DashboardModel {
        var __dashboard = new DashboardModel();
        __dashboard.lanctosEntradaAVencer = dashboard.lanctosEntradaAVencer;
        __dashboard.lanctosSaidaAVencer = dashboard.lanctosSaidaAVencer;
        __dashboard.lanctosEntradaVencidos = dashboard.lanctosEntradaVencidos;
        __dashboard.lanctosSaidaVencidos = dashboard.lanctosSaidaVencidos;
        __dashboard.lanctosEntradaEmAbertoMesesAnteriores = dashboard.lanctosEntradaEmAbertoMesesAnteriores;
        __dashboard.lanctosSaidaEmAbertoMesesAnteriores = dashboard.lanctosSaidaEmAbertoMesesAnteriores;
        __dashboard.totalSaidasPagas = dashboard.totalSaidasPagas;
        __dashboard.totalEntradasRecebidas = dashboard.totalEntradasRecebidas;
        __dashboard.totalSaidasVencidas = dashboard.totalSaidasVencidas;
        __dashboard.totalEntradasVencidas = dashboard.totalEntradasVencidas;
        __dashboard.totalSaidasAVencer = dashboard.totalSaidasAVencer;
        __dashboard.totalEntradasAVencer = dashboard.totalEntradasAVencer;
        __dashboard.totalEntradasEmAbertoMesesAnteriores = dashboard.totalEntradasEmAbertoMesesAnteriores;
        __dashboard.totalSaidasEmAbertoMesesAnteriores = dashboard.totalSaidasEmAbertoMesesAnteriores;
        __dashboard.totalEntradasMesAnterior = dashboard.totalEntradasMesAnterior;
        __dashboard.totalSaidasMesAnterior = dashboard.totalSaidasMesAnterior;
        return __dashboard;
    }

    getTotalReceitas(): number {
        return (this.totalEntradasAVencer + this.totalEntradasVencidas + this.totalEntradasRecebidas);
    }

    getTotalDespesas(): number {
        return (this.totalSaidasAVencer + this.totalSaidasVencidas + this.totalSaidasPagas);
    }

    getPercDiferencaReceitasMesAnterior(): number {        
        return ((this.getTotalReceitas() - this.totalEntradasMesAnterior) / this.totalEntradasMesAnterior) * 100;
    }

    getPercDiferencaDespesasMesAnterior(): number {
        return ((this.getTotalDespesas() - this.totalSaidasMesAnterior) / this.totalSaidasMesAnterior) * 100;
    }

    getDescricaoPercReceitas(): string {
        var descricao = (this.getPercDiferencaReceitasMesAnterior() >= 0) ? 'a mais' : 'a menos';
        return `${descricao} que o mês passado.`;
    }

    getDescricaoPercDespesas(): string {
        var descricao = (this.getPercDiferencaDespesasMesAnterior() >= 0) ? 'a mais' : 'a menos';
        return `${descricao} que o mês passado.`;
    }

}