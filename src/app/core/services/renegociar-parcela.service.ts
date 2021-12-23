import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { RenegociacaoModel } from '../models/renegociacao.model';
import { PathUrl } from '../helpers/path-url';

@Injectable({
  providedIn: 'root'
})
export class RenegociarParcelaService extends HttpService<RenegociacaoModel> {

  constructor(protected http: HttpClient, protected url: PathUrl) {
    super(http, url.RENEGOCIAR_PARCELAS);
  }

}
