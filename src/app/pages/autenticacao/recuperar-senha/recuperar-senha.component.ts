import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PathUrl } from 'src/app/core/helpers/path-url';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.css']
})
export class RecuperarSenhaComponent implements OnInit {

  email: string = "";
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private url: PathUrl,
    private router: Router,
    private http: HttpClient,
    private alertService: AlertService) { }

  ngOnInit(): void { }

  async send() {

    if (this.email == '') {
      this.alertService.warn('Informe um e-mail válido!', this.options);
      return;
    }

    await this.http.post(this.url.LOGIN_REDEFINIR_SENHA, this.email).subscribe({
      next: () => {
        this.router.navigate(['login/info-recuperar-senha']);
      },
      error: () => {
        this.alertService.error('Ocorreu um erro ao redefinir a senha!', this.options);
      }
    });

  }

}
