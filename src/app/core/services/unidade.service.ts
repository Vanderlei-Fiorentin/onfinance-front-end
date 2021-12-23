import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { UnidadeMedidaModel } from '../models/unidade-medida.model';
import { PathUrl } from '../helpers/path-url';

@Injectable({
  providedIn: 'root'
})
export class UnidadeService extends HttpService<UnidadeMedidaModel> {

  constructor(protected http: HttpClient, protected url: PathUrl) {
    super(http, url.UNIDADES_MEDIDAS);
  }
}
