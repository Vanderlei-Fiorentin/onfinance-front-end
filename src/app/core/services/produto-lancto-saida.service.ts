import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PathUrl } from '../helpers/path-url';
import { ProdutoLanctoSaidaModel } from '../models/produto-lancto-saida.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoLanctoSaidaService extends HttpService<ProdutoLanctoSaidaModel>{

  constructor(protected http: HttpClient, protected url: PathUrl) {
    super(http, url.PRODUTOS_LANCTO_SAIDA);
  }

  findByIdLancto(id: number) {
    return this.http.get<ProdutoLanctoSaidaModel[]>(`${this.API_URL}/${id}`).pipe();
  }

}
