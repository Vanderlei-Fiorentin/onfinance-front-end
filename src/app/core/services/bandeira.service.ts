import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { BandeiraModel } from '../models/bandeira.model';
import { PathUrl } from '../helpers/path-url';

@Injectable({
  providedIn: 'root'
})
export class BandeiraService extends HttpService<BandeiraModel> {

  constructor(protected http: HttpClient, protected url: PathUrl) {
    super(http, url.BANDEIRAS);
  }

  saveFormData(data: FormData) {
    return this.http.post<BandeiraModel>(this.API_URL, data).pipe(take(1));
  }

  updateFormData(data: FormData) {
    return this.http.put<BandeiraModel>(this.API_URL, data).pipe(take(1));
  }

  download(id: number) {
    return this.http.get<FormData>(`${this.API_URL}/${id}/download`).pipe(take(1));
  }

}
