import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { PathUrl } from '../helpers/path-url';
import { ProdutoModel } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends HttpService<ProdutoModel> {

  constructor(protected http: HttpClient, protected url: PathUrl) {
    super(http, url.PRODUTOS);
  }
}
