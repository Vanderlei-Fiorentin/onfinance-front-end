import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { PathUrl } from '../helpers/path-url';
import { CategoriaModel } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends HttpService<CategoriaModel> {

  constructor(protected http: HttpClient, protected url: PathUrl) {
    super(http, url.CATEGORIAS);
  }

}
