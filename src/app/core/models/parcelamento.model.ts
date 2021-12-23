export class ParcelamentoModel {

    parcelas: number;
    vigencia: number;
    juros: number;
    multa: number;

    constructor(parcelas: number, vigencia: number, juros: number, multa: number) {
        this.parcelas = parcelas;
        this.vigencia = vigencia;
        this.juros = juros;
        this.multa = multa;
    }

}