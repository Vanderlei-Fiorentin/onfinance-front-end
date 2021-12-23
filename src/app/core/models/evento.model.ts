export class EventoModel {

    id!: number;
    nome!: string;
    tipo!: string;
    descricao!: string;

    constructor() { }

    static builder(evento: EventoModel): EventoModel {
        var __evento = new EventoModel();
        __evento.id = evento.id;
        __evento.nome = evento.nome;
        __evento.tipo = evento.tipo;
        __evento.descricao = evento.descricao;
        return __evento;
    }

    getTipoEvento(): string {
        switch (this.tipo) {
            case 'P': return 'Provento';
            case 'D': return 'Desconto';
            default: return 'Tipo indefinido'
        };
    }

}