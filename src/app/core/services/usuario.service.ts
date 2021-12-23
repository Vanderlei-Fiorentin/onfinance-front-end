import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { PathUrl } from '../helpers/path-url';
import { UsuarioDto } from 'src/app/shared/dtos/usuario-dto';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends HttpService<UsuarioModel> {

  constructor(protected http: HttpClient, protected url: PathUrl) { 
      super(http, url.USUARIOS);
  }

  saveUsuarioPerfil(data: FormData) {
    return this.http.post<FormData>(this.API_URL, data).pipe();
  }

  updateUsuarioPerfil(data: FormData) {
    return this.http.put<FormData>(this.API_URL, data).pipe();
  }

  findByEmail(data: String) {
    return this.http.get<UsuarioModel>(`${this.API_URL}/by-email?email=${data}`).pipe();
  }

  findUsuarioDtoById(id: number) {
    return this.http.get<UsuarioDto>(`${this.API_URL}/${id}`).pipe();
  }

}
