export class BandeiraModel {

    id!: number;
    nome!: string;
    logo!: string;

    constructor() { }

    static builder(bandeira: BandeiraModel): BandeiraModel {
        var __bandeira = new BandeiraModel();
        __bandeira.id = bandeira.id;
        __bandeira.nome = bandeira.nome;
        __bandeira.logo = bandeira.logo;
        return __bandeira;
    }

}