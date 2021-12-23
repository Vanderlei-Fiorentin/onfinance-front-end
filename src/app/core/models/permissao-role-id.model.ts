import { PermissaoModel } from "./permissao.model";
import { RoleModel } from "./role.model";

export class PermissaoRoleID {

    permissao: PermissaoModel;
    role: RoleModel;

    constructor(permissao: PermissaoModel, role: RoleModel) {
        this.permissao = permissao;
        this.role = role;
    }
}