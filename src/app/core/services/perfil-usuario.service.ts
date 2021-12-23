import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PathUrl } from '../helpers/path-url';
import { PerfilUsuarioModel } from '../models/perfil-usuario.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PerfilUsuarioService extends HttpService<PerfilUsuarioModel>{

  constructor(protected http: HttpClient, protected url: PathUrl) {
    super(http, url.PERFIL_USUARIO);
  }

  findByIdUsuario(data: number) {
    return this.http.get<PerfilUsuarioModel>(`${this.API_URL}/${data}`).pipe();
  }

}
