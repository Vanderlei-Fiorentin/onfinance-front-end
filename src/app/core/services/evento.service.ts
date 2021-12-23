import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { EventoModel } from '../models/evento.model';
import { PathUrl } from '../helpers/path-url';

@Injectable({
  providedIn: 'root'
})
export class EventoService extends HttpService<EventoModel> {

  constructor(protected http: HttpClient, protected url: PathUrl) {
    super(http, url.EVENTOS);
  }
}
