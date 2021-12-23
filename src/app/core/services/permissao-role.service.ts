import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { PathUrl } from '../helpers/path-url';
import { PermissaoRoleModel } from '../models/permissao-role.model';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})
export class PermissaoRoleService extends HttpService<PermissaoRoleModel>{

    constructor(protected http: HttpClient, protected url: PathUrl) {
        super(http, url.PERMISSOES_ROLES);
    }

    saveAll(data: PermissaoRoleModel[]) {
        return this.http.post<PermissaoRoleModel>(`${this.API_URL}/list`, data).pipe(take(1));
    }

    findByRole(id: number) {
        return this.http.get<PermissaoRoleModel[]>(`${this.API_URL}/role/${id}`).pipe(take(1));
    }

}
