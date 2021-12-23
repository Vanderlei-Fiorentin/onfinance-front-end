import { UsuarioModel } from "./usuario.model";

export type PerfilUsuarioModel = {

    id: number;
    usuario: UsuarioModel;
    inscricao: String;
    dataNascimento: String;
    foto: String;
    avisoFaturaVencida: boolean;
    avisoFaturaAVencer: boolean;
    header: String;
    sidebar: String;
    temaAbas: String;
    temaPaginas: String;

}