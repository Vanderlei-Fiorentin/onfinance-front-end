import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { PathUrl } from '../helpers/path-url';
import { EmpresaModel } from '../models/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService extends HttpService<EmpresaModel> {

  constructor(protected http: HttpClient, protected url: PathUrl) {
    super(http, url.EMPRESAS);
  }
}
