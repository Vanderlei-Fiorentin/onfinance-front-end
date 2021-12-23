import { PerfilUsuarioModel } from "./perfil-usuario.model";

export type JwtModel = {

    perfil: PerfilUsuarioModel;
    jwt: String;

}