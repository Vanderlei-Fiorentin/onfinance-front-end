import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PathUrl } from '../helpers/path-url';
import { PermissaoModel } from '../models/permissao.model';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root'
})
export class PermissaoService extends HttpService<PermissaoModel>{

    constructor(protected http: HttpClient, protected url: PathUrl) {
        super(http, url.PERMISSOES);
    }

}
