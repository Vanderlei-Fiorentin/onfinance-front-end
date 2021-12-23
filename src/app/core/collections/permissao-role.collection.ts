import { PermissaoRoleModel } from "../models/permissao-role.model";
import { PermissaoModel } from "../models/permissao.model";
import { AlertService } from "../services/alert.service";
import { Collection } from "./collection";

export class PermissaoRoleCollection extends Collection<PermissaoRoleModel>{

    options = {
        autoClose: true,
        keepAfterRouteChange: true
    };

    constructor(private alertService: AlertService) {
        super();
    }

    push(permissao: PermissaoRoleModel) {
        if (this.isValid(permissao.permissaoRoleID.permissao) === true) {
            this.data.push(permissao);
        } else {
            this.alertService.warn(`A permissão ${permissao.permissaoRoleID.permissao.nome} já está adicionado na lista!`, this.options);
        }
    };

    isValid(permissao: PermissaoModel): boolean {
        return (this.data.findIndex(p => p.permissaoRoleID.permissao.id === permissao.id) === -1);
    };

}