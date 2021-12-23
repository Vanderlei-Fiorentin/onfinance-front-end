export class UsuarioModel {

    id!: number;
    nome!: string;
    email!: string;
    usuario!: string;
    senha!: string;
    administrador!: boolean;
    ativo!: boolean;

    constructor() { }

    static builder(usuario: UsuarioModel): UsuarioModel {
        var __usuario = new UsuarioModel();
        __usuario.id = usuario.id;
        __usuario.nome = usuario.nome;
        __usuario.email = usuario.email;
        __usuario.usuario = usuario.usuario;
        __usuario.senha = usuario.senha;
        __usuario.administrador = usuario.administrador;
        __usuario.ativo = usuario.ativo;
        return __usuario;
    }

}