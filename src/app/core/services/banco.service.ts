import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { BancoModel } from '../models/banco.model';
import { PathUrl } from '../helpers/path-url';

@Injectable({
  providedIn: 'root'
})
export class BancoService extends HttpService<BancoModel> {

  constructor(protected http: HttpClient, protected url: PathUrl) {
    super(http, url.BANCOS);
  }

  saveFormData(data: FormData) {
    return this.http.post<BancoModel>(this.API_URL, data).pipe(take(1));
  }

  updateFormData(data: FormData) {
    return this.http.put<BancoModel>(this.API_URL, data).pipe(take(1));
  }

}
