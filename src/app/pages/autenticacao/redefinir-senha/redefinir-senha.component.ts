import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PathUrl } from 'src/app/core/helpers/path-url';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.component.html',
  styleUrls: ['./redefinir-senha.component.css']
})
export class RedefinirSenhaComponent implements OnInit {

  token: string = "";
  senha!: string;
  confirmacaoSenha!: string;
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private url: PathUrl,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    }); 
  }

  async update() {

    console.log(this.senha);

    if (this.senha !== this.confirmacaoSenha) {
      this.alertService.warn('As senhas devem ser iguais!', this.options);
      return;
    }

    const headers = new HttpHeaders({ 'key': this.token });

    await this.http.put(this.url.LOGIN_ALTERAR_SENHA, this.senha, { "headers": headers }).subscribe({
      next: () => {
        this.router.navigate(['login']);
      },
      error: () => {
        this.alertService.error('Ocorreu um erro ao redefinir a senha!', this.options);
      }
    });

  }

}
