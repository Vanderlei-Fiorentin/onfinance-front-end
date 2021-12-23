import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { PathUrl } from '../helpers/path-url';
import { ExtratoModel } from '../models/extrato.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService extends HttpService<ExtratoModel> {

  constructor(protected http: HttpClient, protected url: PathUrl) {
    super(http, url.EXTRATOS_BANCARIOS);
  }

  findExtratos(params: any) {
    return this.http.get<ExtratoModel[]>(this.url.EXTRATOS_BANCARIOS_FILTRO, {params: params}).pipe(take(1));
  } 

}
