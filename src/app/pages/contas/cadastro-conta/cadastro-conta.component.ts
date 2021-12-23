import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FunctionsUtil } from 'src/app/core/helpers/functions-util';
import { AgenciaModel } from 'src/app/core/models/agencia.model';
import { ContaCorrenteModel } from 'src/app/core/models/conta-corrente.model';
import { UsuarioModel } from 'src/app/core/models/usuario.model';
import { AgenciaService } from 'src/app/core/services/agencia.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { ContaService } from 'src/app/core/services/conta.service';
import { ExceptionService } from 'src/app/core/services/exception.service';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-cadastro-conta',
  templateUrl: './cadastro-conta.component.html',
  styleUrls: ['./cadastro-conta.component.css']
})
export class CadastroContaComponent implements OnInit {

  conta: ContaCorrenteModel;
  agencias: AgenciaModel[] = [];
  usuarios: UsuarioModel[] = [];
  options = {
    autoClose: true,
    keepAfterRouteChange: true
  };

  constructor(
    private contaService: ContaService,
    private usuarioService: UsuarioService,
    private agenciaService: AgenciaService,
    private router: Router,
    private alertService: AlertService, 
    private exception: ExceptionService) {
    this.conta = new ContaCorrenteModel();
  }

  ngOnInit() {
    this.findAgencias();
    this.findUsuarios();
  }

  save() {
    this.contaService.save(this.conta).subscribe({
      next: () => {
        this.alertService.success('Conta corrente inserida com sucesso!', this.options);
        this.router.navigate(['contas']);
      },
      error: (error) => {
        this.exception.alert(error, 'Os dados não foram inseridos!');
      }
    });
  }

  findAgencias() {
    this.agenciaService.findAll().subscribe({
      next: (agencias) => {
        this.agencias = agencias;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar as agências!');
      }
    });
  }

  findUsuarios() {
    this.usuarioService.findAll().subscribe({
      next: (usuarios) => {
        this.usuarios = usuarios;
      },
      error: (error) => {
        this.exception.alert(error, 'Não foi possível carregar os usuários!');
      }
    })
  }

  getAgencia(agencia: AgenciaModel) {
    return FunctionsUtil.getAgencia(agencia);
  }

}
