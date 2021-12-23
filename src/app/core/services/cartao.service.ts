import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { take } from 'rxjs/operators';
import { PathUrl } from '../helpers/path-url';
import { CartaoCreditoModel } from '../models/cartao-credito.model';

@Injectable({
  providedIn: 'root'
})
export class CartaoService extends HttpService<CartaoCreditoModel> {

  constructor(protected http: HttpClient, protected url: PathUrl) {
    super(http, url.CARTOES_CREDITO);  
  }

  findByFiltro(status: boolean) {
    return this.http.get<CartaoCreditoModel[]>(`${this.API_URL}?status=${status}`).pipe(take(1));
  }
}
