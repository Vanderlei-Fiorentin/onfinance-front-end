import { PerfilUsuarioModel } from "src/app/core/models/perfil-usuario.model";
import { UsuarioRoleModel } from "src/app/core/models/usuario-role.model";
import { UsuarioModel } from "src/app/core/models/usuario.model";

export class UsuarioDto {

    public id: number;
    public nome: string;
    public email: string;
    public usuario: string;
    public senha: string;
    public administrador: boolean;
    public ativo: boolean;
    public perfil: PerfilUsuarioModel;
    public roles: UsuarioRoleModel[];

    constructor(usuario: UsuarioModel, perfil: PerfilUsuarioModel, roles: UsuarioRoleModel[]) {
        this.id = usuario.id;
        this.nome = usuario.nome;
        this.email = usuario.email;
        this.senha = usuario.senha;
        this.usuario = usuario.usuario;
        this.administrador = usuario.administrador;
        this.ativo = usuario.ativo;
        this.perfil = perfil;
        this.roles = roles;
    }

    static builder(usuario: any, perfil: any, roles: any[]): UsuarioDto {
        return {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
            usuario: usuario.usuario,
            senha: usuario.senha,
            administrador: usuario.administrador,
            ativo: usuario.ativo,
            perfil: perfil,
            roles: roles
        }
    }
}