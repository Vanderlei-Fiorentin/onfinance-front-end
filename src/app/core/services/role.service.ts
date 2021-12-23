import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PathUrl } from '../helpers/path-url';
import { RoleModel } from '../models/role.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService extends HttpService<RoleModel>{

  constructor(protected http: HttpClient, protected url: PathUrl) {
    super(http, url.ROLES);
  }

}
