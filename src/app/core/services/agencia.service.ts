import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { AgenciaModel } from '../models/agencia.model';
import { PathUrl } from '../helpers/path-url';

@Injectable({
  providedIn: 'root'
})
export class AgenciaService extends HttpService<AgenciaModel> {

  constructor(protected http: HttpClient, protected url: PathUrl) {
    super(http, url.AGENCIAS);
  }
}
