import { PermissaoRoleID } from "./permissao-role-id.model";

export class PermissaoRoleModel {

    permissaoRoleID: PermissaoRoleID;

    constructor(permissaoRoleId: PermissaoRoleID) {
        this.permissaoRoleID = permissaoRoleId;
    }

}