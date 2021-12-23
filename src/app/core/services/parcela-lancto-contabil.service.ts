import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { take } from 'rxjs/operators';
import { PathUrl } from '../helpers/path-url';
import { ParcelaLanctoContabilModel } from '../models/parcela-lancto-contabil.model';

@Injectable({
  providedIn: 'root'
})
export class ParcelaLanctoContabilService extends HttpService<ParcelaLanctoContabilModel> {

  constructor(protected http: HttpClient, protected url: PathUrl) {
    super(http, url.PARCELAS_LANCTO_CONTABIL);
  }

  findParcelasByLancto(id: number) {
    return this.http.get<ParcelaLanctoContabilModel[]>(`${this.url.PARCELAS_LANCTO_CONTABIL_ABERTO_BY_LANCTO}/${id}`).pipe(take(1));
  }

  findParcelasDesvinculadas() {
    return this.http.get<ParcelaLanctoContabilModel[]>(this.url.PARCELAS_LANCTO_CONTABIL_DESVINCULADAS).pipe(take(1));
  }

  findParcelasByFatura(id: number) {
    return this.http.get<ParcelaLanctoContabilModel[]>(`${this.url.PARCELAS_LANCTO_CONTABIL_BY_FATURA}/${id}`).pipe(take(1));
  }

  desvincularParcela(parcela: ParcelaLanctoContabilModel) {
    return this.http.post<any>(this.url.PARCELAS_LANCTO_CONTABIL_DESVINCULAR, parcela).pipe(take(1));
  }

  vincularParcela(parcela: ParcelaLanctoContabilModel) {
    return this.http.post<any>(this.url.PARCELAS_LANCTO_CONTABIL_VINCULAR, parcela).pipe(take(1));
  }

}
