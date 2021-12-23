import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { ContaCorrenteModel } from '../models/conta-corrente.model';
import { PathUrl } from '../helpers/path-url';

@Injectable({
  providedIn: 'root'
})
export class ContaService extends HttpService<ContaCorrenteModel> {

  constructor(protected http: HttpClient, protected url: PathUrl) {
    super(http, url.CONTAS_CORRENTE);
  }

  findByFiltro(status: boolean) {
    return this.http.get<ContaCorrenteModel[]>(`${this.API_URL}?status=${status}`).pipe();
  }
  
}
