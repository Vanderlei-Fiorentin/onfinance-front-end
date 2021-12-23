import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { PathUrl } from '../helpers/path-url';
import { UsuarioRoleModel } from '../models/usuario-role.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioRoleService extends HttpService<UsuarioRoleModel>{

  constructor(protected http: HttpClient, protected url: PathUrl) {
    super(http, url.USUARIOS_ROLES);
  }

  findRolesUsuarioByIdUsuario(id: number) {
    return this.http.get<UsuarioRoleModel[]>(`${this.API_URL}/${id}`).pipe(take(1));
  }

}
