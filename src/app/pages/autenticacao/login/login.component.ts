import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PathUrl } from 'src/app/core/helpers/path-url';
import { JwtModel } from 'src/app/core/models/jwt.model';
import { LoginModel } from 'src/app/core/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel;
  message: string = '';

  constructor(
    private url: PathUrl,
    private router: Router,
    private http: HttpClient) {
    this.loginModel = new LoginModel('', '');
  }

  ngOnInit(): void {

  }

  async login() {

    if (this.loginModel.login == '' || this.loginModel.password == '') {
      this.message = 'Informe um usuário e senha!';
      return;
    }    
    
    await this.http.post<JwtModel>(this.url.LOGIN, this.loginModel).subscribe({
      next: (data) => {
        if (data && data.jwt) {
          window.localStorage.setItem('token', data.jwt.toString());
          window.localStorage.setItem('perfil', JSON.stringify(data.perfil));
          this.router.navigate(['']);
        } else {
          this.message = 'Erro ao realizar login!'
        }
      },
      error: (error) => {
        if(error.status == 401) {
          this.message = 'Usuário ou senha incorretos!'
        } else {
          this.message = 'Erro ao realizar login!'
        }
      }
    });

  }

}
