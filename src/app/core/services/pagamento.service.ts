import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { PathUrl } from '../helpers/path-url';
import { PagamentoModel } from '../models/pagamento.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService extends HttpService<PagamentoModel> {

  constructor(protected http: HttpClient, protected url: PathUrl) {
    super(http, url.PAGAMENTOS);
  }

  saveFormData(data: FormData) {
    return this.http.post<PagamentoModel>(this.API_URL, data).pipe(take(1));
  }

}
