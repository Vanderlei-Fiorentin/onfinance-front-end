import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { FaturaModel } from '../models/fatura.model';
import { PathUrl } from '../helpers/path-url';
import { PagamentoModel } from '../models/pagamento.model';

@Injectable({
  providedIn: 'root'
})
export class FaturaService extends HttpService<FaturaModel> {

  constructor(protected http: HttpClient, protected url: PathUrl) {
    super(http, url.FATURAS);
  }

  updateFormData(data: FormData) {
    return this.http.put<FaturaModel>(this.API_URL, data).pipe(take(1));
  }

  findFaturas(params: any) {
    return this.http.get<PagamentoModel[]>(this.url.FATURAS_BY_FILTRO, { params: params }).pipe(take(1));
  }

}
