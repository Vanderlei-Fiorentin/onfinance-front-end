import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PathUrl } from '../helpers/path-url';
import { EventoLanctoEntradaModel } from '../models/evento-lancto-entrada.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class EventoLanctoEntradaService extends HttpService<EventoLanctoEntradaModel>{

  constructor(protected http: HttpClient, protected url: PathUrl) {
    super(http, url.EVENTOS_LANCTO_ENTRADA);
  }

  findByIdLancto(id: number) {
    return this.http.get<EventoLanctoEntradaModel[]>(`${this.API_URL}/${id}`).pipe();
  }

}
