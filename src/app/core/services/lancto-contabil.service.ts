import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { LanctoContabilModel } from '../models/lancto-contabil.model';
import { PathUrl } from '../helpers/path-url';

@Injectable({
  providedIn: 'root'
})
export class LanctoContabilService extends HttpService<LanctoContabilModel> {

  constructor(protected http: HttpClient, protected url: PathUrl) {
    super(http, url.LANCTOS_CONTABEIS);
  }

  saveLanctoContabilGeral(data: FormData) {
    return this.http.post<LanctoContabilModel>(this.API_URL, data).pipe(take(1));
  }

  updateLanctoContabilGeral(data: FormData) {
    return this.http.put<LanctoContabilModel>(this.API_URL, data).pipe(take(1));
  }

  findLanctosSaidasAberto(tipo: String, status: String) {
    return this.http.get<Array<LanctoContabilModel>>(`${this.API_URL}?tipo=${tipo}&status=${status}`).pipe(take(1));
  }

  findByParcela(id: number) {
    return this.http.get<LanctoContabilModel>(`${this.url.LANCTOS_CONTABEIS_PARCELAS}/${id}`).pipe(take(1));
  }

  findByFatura(id: number) {
    return this.http.get<LanctoContabilModel>(`${this.url.LANCTOS_CONTABEIS_FATURAS}/${id}`).pipe(take(1));
  }

}
 