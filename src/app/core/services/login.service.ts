import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  async login(url: string, usuario: string, senha: string) {
    const result = await this.http.get<any>(url, {
      params: {
        'usuario': usuario,
        'senha': senha
      }
    }).toPromise();
    if (result && result.jwt) {
      window.localStorage.setItem('token', result.jwt);
      return true;
    }

    return false;
  }

}
