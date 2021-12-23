import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PathUrl } from '../helpers/path-url';
import { SaidaLanctoEntradaModel } from '../models/saida-lancto-entrada.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class SaidaLanctoEntradaService extends HttpService<SaidaLanctoEntradaModel>{

  constructor(protected http: HttpClient, protected url: PathUrl) {
    super(http, url.SAIDAS_LANCTO_ENTRADA);
  }

  findByIdLancto(id: number) {
    return this.http.get<SaidaLanctoEntradaModel[]>(`${this.API_URL}/${id}`).pipe();
  }

}
